import React, { useState } from "react";
import { addContact } from "../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const contacts = useSelector((state) => state.todo.contacts);
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      console.log(`Thank you ${formData.name} for contacting us!`);
    } else {
      alert("Please fill in all fields.");
    }
    dispatch(addContact(formData));
    setFormData({ name: "", age: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 flex-1 transform transition duration-500 hover:scale-[1.02]"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-purple-300 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Age</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border-2 border-purple-300 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                placeholder="Enter your age"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-4 rounded-xl hover:bg-purple-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Submitted Contacts List */}
        <div className="bg-white shadow-xl rounded-2xl p-8 flex-1">
          <h3 className="text-2xl font-bold text-purple-700 mb-6">
            Submitted Contacts
          </h3>
          {contacts.length === 0 ? (
            <p className="text-gray-500 text-center">
              No contacts submitted yet
            </p>
          ) : (
            <ul className="space-y-3">
              {contacts.map((c, i) => (
                <li
                  key={i}
                  className="bg-purple-50 p-4 rounded-xl flex justify-between items-center hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      {c.name.charAt(0)}
                    </div>
                    <span className="font-medium text-purple-900">
                      {c.name}
                    </span>
                  </div>
                  <span className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {c.age} years
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
