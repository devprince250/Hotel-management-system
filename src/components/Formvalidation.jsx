import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (!/^[A-Za-z0-9_]{3,16}$/.test(formData.username)) {
      newErrors.username = "Username must be 3–16 characters (letters, numbers, underscores).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.password)) {
      newErrors.password = "Password must be at least 6 characters, with letters and numbers.";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required.";
    } else if (!/^(\+250|078|079|072|073)\d{7}$/.test(formData.number)) {
      newErrors.number = "Phone must start with +250, 078, 079, 072, or 073 and have 10 digits total.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Form Validation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Username */}
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            pattern="^[A-Za-z0-9_]{3,16}$"
            onInvalid={e => e.target.setCustomValidity("Username must be 3–16 characters and contain only letters, numbers, or underscores.")}
            onInput={e => e.target.setCustomValidity("")}
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
            onInvalid={e => e.target.setCustomValidity("Please enter a valid email address.")}
            onInput={e => e.target.setCustomValidity("")}
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            onInvalid={e => e.target.setCustomValidity("Password must be at least 6 characters and include both letters and numbers.")}
            onInput={e => e.target.setCustomValidity("")}
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="number"
            pattern="^(\+250|078|079|072|073)\d{7}$"
            onInvalid={e => e.target.setCustomValidity("Phone must start with +250, 078, 079, 072, or 073 and contain 10 digits.")}
            onInput={e => e.target.setCustomValidity("")}
            value={formData.number}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
