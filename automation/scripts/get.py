import json

def get_machine_details(tfstate_path):
    try:
        with open(tfstate_path, 'r') as tfstate_file:
            tfstate_data = json.load(tfstate_file)

            resources = tfstate_data.get('resources', [])
            machine_details = []

            for resource in resources:
                if resource['type'] == 'google_compute_instance':
                    attributes = resource['instances'][0]['attributes']
                    instance_details = {
                        'instance_name': attributes.get('name'),
                        'machine_type': attributes.get('machine_type'),
                        'network_interface': attributes.get('network_interface', [{}])[0].get('network_ip'),
                        # Add more attributes as needed
                    }
                    machine_details.append(instance_details)

            return machine_details
    except FileNotFoundError:
        print(f"Error: Terraform state file not found at {tfstate_path}")
        return None
    except json.JSONDecodeError:
        print(f"Error: Unable to parse JSON in Terraform state file at {tfstate_path}")
        return None

tfstate_path = '../terraform/terraform.tfstate'

machine_details = get_machine_details(tfstate_path)

if machine_details is not None:
    print("Machine Details:")
    for details in machine_details:
        print(details)
