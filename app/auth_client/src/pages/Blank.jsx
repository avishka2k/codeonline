import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
const Blank = () => {
  const [isPopupShow, setPopupShow] = useState(false);

  const plans = [
    {
      "title":"Micro",
      "image": "Debian GNU/Linux 11",
      "ram":"1 GB RAM",
      "cpu":"2 vCPU",
      "core":"1 core",
      "disk":"10 GB Disk"
    },
    {
      "title":"Small",
      "image": "Debian GNU/Linux 11",
      "ram":"2 GB RAM",
      "cpu":"2 vCPU",
      "core":"1 core",
      "disk":"15 GB Disk"
    },
    {
      "title":"Medium",
      "image": "Debian GNU/Linux 11",
      "ram":"4 GB RAM",
      "cpu":"2 vCPU",
      "core":"2 core",
      "disk":"25 GB Disk"
    },
    {
      "title":"Standard",
      "image":"Debian GNU/Linux 11",
      "ram":"8 GB RAM",
      "cpu":"2 vCPU",
      "core":"4 core",
      "disk":"32 GB Disk"
    },
  ]

  return (
    <>
      <Breadcrumb pageName="Blank" />
      <div className="grid grid-cols-4 gap-4">  
      {
        plans.map((plan)=>(
          <div key={plan.title} class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plan.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{plan.image}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{plan.ram}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{plan.cpu}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{plan.core}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{plan.disk}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Start
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        ))
      }
      </div>
    </>
  );
};

export default Blank;
