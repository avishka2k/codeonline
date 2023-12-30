resource "google_compute_instance" "gcp_vm" {
  name         = join("-", [var.prefix, random_uuid.random.result, "gci"])
  machine_type = "e2-medium"
  zone         = var.zone
  project      = var.project

  boot_disk {
    device_name = join("-", [var.prefix, "bootdisk"])
    auto_delete = true
    initialize_params {
      size  = var.bootdisk_size
      type  = var.bootdisk_type
      image = var.bootdisk_image
    }
  }

  network_interface {
    network = google_compute_network.default.name
    access_config {
      nat_ip = google_compute_address.static.address
    }
  }
  tags = ["http-server", "https-server"]
}

resource "google_compute_firewall" "default" {
  name    = join("-", [var.prefix, "firewall"])
  network = google_compute_network.default.name
  project = google_compute_instance.gcp_vm.project
  
  allow {
    protocol = "tcp"
    ports    = ["80", "8080"]
  }

  source_tags = ["web"]
}

resource "google_compute_network" "default" {
  name = join("-", [var.prefix, "network"])
}

resource "google_compute_address" "static" {
  name = join("-", [var.prefix, "ipv4"])
}

resource "random_uuid" "random" {

}

