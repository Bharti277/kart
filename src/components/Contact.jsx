import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData, "formdata");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md grid gap-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">
          Contact Us
        </h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-purple-300 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition"
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border-2 border-purple-300 rounded-xl p-4 focus:outline-none focus:border-purple-500 transition"
          placeholder="Enter your age"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
