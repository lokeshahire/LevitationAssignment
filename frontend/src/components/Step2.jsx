import React, { useState } from "react";
import axios from "axios";

function Step2({ formData, setFormData, moveToNextStep }) {
  const [geolocationStatus, setGeolocationStatus] = useState("Not captured");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      files: [...prevData.files, ...files],
    }));
  };

  const handleGeolocationCapture = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
          setGeolocationStatus("Captured");
        },
        (error) => {
          console.error("Geolocation error:", error);
          setGeolocationStatus("Error capturing");
        }
      );
    } else {
      setGeolocationStatus("Geolocation not supported");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const filesFormData = new FormData();

      for (const file of formData.files) {
        filesFormData.append("files", file);
      }

      console.log("filesFormData", filesFormData);

      await axios.post(
        "https://levitationbackend.onrender.com/form/upload",
        filesFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      moveToNextStep();
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Multi-File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="files"
          multiple
          onChange={handleFileChange}
          className="border rounded-lg p-2"
        />
        <button
          type="button"
          onClick={handleGeolocationCapture}
          className="bg-blue-500 text-white px-4 py-3 rounded-lg mt-10	"
        >
          Capture Geolocation
        </button>
        <div className="text-xl mb-4 mt-10">
          Geolocation Status: {geolocationStatus}
        </div>
        {/* <button type="submit">Next</button> */}
      </form>
    </div>
  );
}

export default Step2;
