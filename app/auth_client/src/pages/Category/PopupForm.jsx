// CategoryForm.tsx
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryForm = ({ closePopup }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState([]);

  const fetchCategory = () => {
    fetch("api/category")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);

      const image_endpoint = `${Date.now()}_${file.name}`;
      setImageUrl(image_endpoint);
    }
  };

  const closeForm = () => {
    setSelectedImage(null);
    closePopup();
  };

  const addCategory = () => {
    fetch("api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, imageUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(imageUrl)
        fetchCategory(data);
        console.log("added success");
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-99999  h-screen w-full flex justify-center overflow-y-scroll bg-black/80 py-5 px-4">
        <div className="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
          <div>
            <div className="mb-5">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Category Title
              </label>
              <input
                type="text"
                name="taskTitle"
                id="taskTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Category Description
              </label>
              <textarea
                name="taskDescription"
                id="taskDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
                className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              ></textarea>
            </div>
            <div className="mb-5">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Add image
              </label>
              <div>
                <div
                  id="FileUpload"
                  className="relative block w-full appearance-none rounded-sm border border-dashed border-stroke bg-white py-4 px-4 dark:border-strokedark dark:bg-boxdark sm:py-14"
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <>
                      <input
                        className="absolute inset-0 z-50 m-0 h-full w-full p-0 opacity-0 outline-none"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-stroke bg-primary/5 dark:border-strokedark">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_75_12841)">
                              <path
                                d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 4.85663V14.1666H9.16667V4.85663L4.1075 9.91663L2.92917 8.73829L10 1.66663L17.0708 8.73746L15.8925 9.91579L10.8333 4.85829V4.85663Z"
                                fill="#3C50E0"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_75_12841">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <p className="text-xs">
                          <span className="text-primary">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <template x-if="files !== null">
                  <div className="mt-4.5 border border-stroke bg-white py-3 px-4 dark:border-strokedark dark:bg-boxdark">
                    <div className="flex items-center justify-between">
                      <template x-for="(_,index) in Array.from({ length: files.length })">
                        <span x-text="files[index].name">Uploading</span>
                      </template>

                      <button>
                        <svg
                          className="fill-current"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill=""
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div className="flex gap-5 justify-end">
              <button
                onClick={closeForm}
                className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  addCategory();
                 
                }}
                className="inline-flex rounded items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
