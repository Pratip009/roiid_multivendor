import { useState } from 'react';

const RegisterPartner = () => {
  const [formData, setFormData] = useState({
    ownerImage: null,
    businessName: '',
    phoneNumber: '',
    email: '',
    address: '',
    aadhaarCard: null,
    panCard: null,
    password: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like an API call
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register as Partner</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Owner Image:</label>
            <input
              type="file"
              name="ownerImage"
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Business Name:</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Aadhaar Card Document:</label>
            <input
              type="file"
              name="aadhaarCard"
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">PAN Card Document:</label>
            <input
              type="file"
              name="panCard"
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 block w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPartner;
