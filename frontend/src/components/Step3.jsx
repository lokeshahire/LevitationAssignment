import React from "react";

function Step3({ formData, setFormData, handleSubmit }) {
  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setFormData((prevData) => ({
      ...prevData,
      select: selectedOptions,
    }));
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Step 3: Multi-Field Select Dropdown
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          multiple
          value={formData.select}
          onChange={handleSelectChange}
          className="border text-xl rounded-lg p-5"
        >
          <option value="Fresher">Fresher</option>
          <option value="Experienced">Experienced</option>
        </select>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default Step3;
