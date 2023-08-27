import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";
import SubmissionTable from "./Table";

function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    files: [],
    latitude: "",
    longitude: "",
    select: [],
  });

  const moveToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const moveToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            moveToNextStep={moveToNextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            moveToNextStep={moveToNextStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const progressPercentage = ((currentStep - 1) / 2) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      select: formData.select.join(", "), // Convert the array to a comma-separated string
    };

    try {
      await axios.post("http://localhost:8080/form/add", formattedData);
      // Handle successful submission, navigation, or any other actions
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Multi-Step Form</h1>
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full h-2 bg-gray-300 rounded-full progress-bar-container">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-sm font-semibold">{`${progressPercentage}% Complete`}</div>
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              className="px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              onClick={moveToPreviousStep}
            >
              Back
            </button>
          )}

          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={moveToNextStep}
          >
            {currentStep === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <SubmissionTable />
    </div>
  );
}

export default FormPage;
