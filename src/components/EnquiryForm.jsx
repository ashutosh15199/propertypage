import React, { useState } from "react";
const EnquiryForm = ({ onClose , form}) => {
  console.log("formdata",form);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error , setError] = useState(null);
  const [loading,setLoading] = useState('false');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const api_key = "https://cms.propertystation.in/api/v2/ppc/lead";
    const publicKey = "FutgeZL4HI2uFTs4B64BSu8w0SuL7/sZv40GWweD8VMD+xF4S6po7GgEu01s8BGd";
    const secretKey = "R0iOrYjUrdT6omGFx6um32sGOBHvjEFYZa6e3KMFN4dxIPU8+D0iNw==";
    const payload={
      name: formData.name,
      email: formData.email,
      country_code: "+91",
      mobile_no: formData.phone,
      message: formData.message || "",   
      subject: form.subject,
      to_email: form.to_email,
      source_id: form.source_id,
      sub_source_id: form.sub_source_id,
      builder_id: form.builder_id,
      project_id: form.project_id,

    };
    console.log("form Data ", form);
    try{
      const response = await fetch(api_key, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "public-key": publicKey,
          "secret-key": secretKey,
        },
        body:JSON.stringify(payload),
      });
     const responseText = await response.text();

    if (response.ok) {
      alert("Thank you for your enquiry!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      console.error("Response status:", response.status);
      console.error("Response body:", responseText);
      throw new Error(
        `Submission failed with status ${response.status}: ${responseText}`
      );
    }
  } catch (err) {
    console.error("Error:", err);
    setError(err.message);
    alert(`Submission failed: ${err.message}`);
  } finally {
    setLoading(false);
  }
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
