import React from "react";

function Step1({ formData, setFormData, moveToNextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moveToNextStep();
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <br />
        <label className="block text-gray-600">Name:</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Email:</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Phone:</label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Address Line 1:</label>

        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Address Line 2:</label>

        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">City:</label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">State:</label>

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Pincode:</label>

        <input
          type="number"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />
        <label className="block text-gray-600">Country:</label>

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
        <br />

        {/* <button type="submit">Next</button> */}
      </form>
    </div>
  );
}

export default Step1;
