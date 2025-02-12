import React, { useState } from "react";

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // Close the form after submission
  };

  return (
    // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
    
    <div className="max-w-lg">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] mb-10">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="ml-[350px] top-3 right-3 text-gray-600 text-2xl font-bold hover:text-gray-900"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 pb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-gray-300"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded focus:ring focus:ring-gray-300"
            rows="3"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 h-10 rounded-md hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
