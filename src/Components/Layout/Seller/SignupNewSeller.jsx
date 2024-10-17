import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const SignupNewSeller = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [shopDescription, setShopDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState(null);
  const [sellerId, setSellerId] = useState("");

  // New mandatory fields
  const [gstNumber, setGstNumber] = useState("");
  const [tradeLicense, setTradeLicense] = useState(null);
  const [companyRegCert, setCompanyRegCert] = useState(null);
  const [companyType, setCompanyType] = useState("individual"); // Default type
  const [companyPan, setCompanyPan] = useState("");
  const [ownerPan, setOwnerPan] = useState("");
  const [ownerAadhar, setOwnerAadhar] = useState("");
  const [shopSelfie, setShopSelfie] = useState(null);
  const [geoLocation, setGeoLocation] = useState({ lat: null, lng: null });

  // seller id
  useEffect(() => {
    const id = v4();
    setSellerId(id);
  }, []);

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeoLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Unable to retrieve your location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleFileInputChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (
      !gstNumber ||
      !tradeLicense ||
      !companyRegCert ||
      !companyPan ||
      !ownerPan ||
      !ownerAadhar ||
      !shopSelfie
    ) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    if (email === JSON.parse(localStorage.getItem("sellerAuth"))?.email) {
      toast.error(
        `The "${email}" is already registered. Please use a different email.`
      );
    } else {
      toast.success("Your account was successfully created! Please login.");

      const sellerAuth = {
        email,
        password,
      };

      const sellerInfo = {
        name,
        phoneNumber,
        address,
        shopDescription,
        zipCode,
        photoUrl: url,
        gstNumber,
        tradeLicense,
        companyRegCert,
        companyPan,
        ownerPan,
        ownerAadhar,
        shopSelfie,
        geoLocation,
      };

      localStorage.setItem("sellerAuth", JSON.stringify(sellerAuth));
      localStorage.setItem("sellerInfo", JSON.stringify(sellerInfo));
      localStorage.setItem("seller_id", JSON.stringify(sellerId));
      localStorage.setItem("isSeller", true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
        >
          Register as a New Seller
        </motion.h2>
      </div>
      <div className="mt-8 mx-auto w-[95%] 800px:w-[60%]">
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 500 }}
          transition={{ duration: 0.6 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form
            className="space-y-6 800px:flex flex-wrap items-center justify-between"
            onSubmit={handleFormSubmit}
          >
            {/* Name */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            {/* Email */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            {/* Address */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="address"
                  name="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            {/* Password */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>
            </div>
            {/* Zip Code */}
            <div className="800px:w-[47%]">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  type="zipCode"
                  name="zipCode"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Shop Description */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="shopDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Shop Description
              </label>
              <div className="mt-1">
                <textarea
                  rows="4"
                  name="shopDescription"
                  required
                  value={shopDescription}
                  onChange={(e) => setShopDescription(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Avatar */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Avatar
              </label>
              <div className="mt-1 flex items-center">
                <RxAvatar className="mr-2" size={30} />
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileInputChange(e, setAvatar)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* GST Number */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="gstNumber"
                className="block text-sm font-medium text-gray-700"
              >
                GST Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="gstNumber"
                  required
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Trade License */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="tradeLicense"
                className="block text-sm font-medium text-gray-700"
              >
                Trade License
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileInputChange(e, setTradeLicense)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Company Registration Certificate */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="companyRegCert"
                className="block text-sm font-medium text-gray-700"
              >
                Company Registration Certificate
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileInputChange(e, setCompanyRegCert)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Company Type */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="companyType"
                className="block text-sm font-medium text-gray-700"
              >
                Company Type
              </label>
              <div className="mt-1">
                <select
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
            </div>

            {/* Company PAN */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="companyPan"
                className="block text-sm font-medium text-gray-700"
              >
                Company PAN
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="companyPan"
                  required
                  value={companyPan}
                  onChange={(e) => setCompanyPan(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Owner PAN */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="ownerPan"
                className="block text-sm font-medium text-gray-700"
              >
                Owner PAN
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ownerPan"
                  required
                  value={ownerPan}
                  onChange={(e) => setOwnerPan(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Owner Aadhar */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="ownerAadhar"
                className="block text-sm font-medium text-gray-700"
              >
                Owner Aadhar
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ownerAadhar"
                  required
                  value={ownerAadhar}
                  onChange={(e) => setOwnerAadhar(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Shop Selfie */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="shopSelfie"
                className="block text-sm font-medium text-gray-700"
              >
                Shop Selfie
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  onChange={(e) => handleFileInputChange(e, setShopSelfie)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>

            {/* Geo Location */}
            <div className="800px:w-[100%]">
              <label
                htmlFor="geoLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Geo-Location (Lat: {geoLocation.lat}, Lng: {geoLocation.lng})
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="geoLocation"
                  readOnly
                  value={`Lat: ${geoLocation.lat}, Lng: ${geoLocation.lng}`}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                />
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              <button
                type="submit"
                className="group relative w-full mb-2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
              <Link
                to="/login"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Sign in here
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupNewSeller;
