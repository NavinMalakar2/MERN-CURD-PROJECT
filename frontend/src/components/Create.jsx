

import React, { useState } from "react";

export const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  console.log(name, email, age);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    }

    if (response.ok) {
      console.log(result);
      // Reset the form values to their default types
      setName("");
      setEmail("");
      setAge(0); // Reset age to 0 instead of an empty string
    }
  };

  return (
    <div className="container mx-auto my-8 max-w-md bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Enter the Data
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Age</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))} // Ensure the value is a number
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
