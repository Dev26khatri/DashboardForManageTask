import React from "react";

const acounts = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-">
        <h1 className="text-2xl text-gray-900 font-bold mb-8">
          Account Settings
        </h1>
        <div className="space-y-10">
          <div className="space-y-2">
            <h3>Profile Information</h3>
            <label className="block text-sm text-gray-600">Name </label>
            <input
              className="w-full border border-gray-400 px-3 py-1 rounded-lg focus:outline-none "
              type="text"
              placeholder="John Doe"
            />
            <label className="block text-sm text-gray-600">Email</label>
            <input
              className="w-full border border-gray-400 px-3 py-1 rounded-lg  focus:outline-none "
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <h3>Security</h3>
            <label className="block text-sm text-gray-600">Password </label>
            <input
              className="w-full border border-gray-400 px-3 py-1 rounded-lg  focus:outline-none "
              type="text"
              placeholder="Enter a New Password"
            />
            <label className="block text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              className="w-full border border-gray-400 px-3 py-1 rounded-lg   focus:outline-none"
              type="text"
              placeholder="Confrim a New Password"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 text-gray-800   bg-gray-100 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out">
              Cancel
            </button>
            <button className="px-4 py-2 text-white   bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default acounts;
