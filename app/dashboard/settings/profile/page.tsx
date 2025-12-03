import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-gray-900 text-3xl font-semibold mb-8">
          Profile Settings
        </h1>
        {/* Profile Picture Settings */}
        <section className="mb-8">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            Profile Picture
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Person Image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <button className="font-semibold px-6 mt-5 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in">
              Change Picture
            </button>
          </div>
        </section>
        {/* Profile Info Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                defaultValue={"Jone Doe"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                defaultValue={"jone_doe2"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email ID
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300 ease-in-out"
                defaultValue={"jonedoe@gmail.com"}
              />
            </div>
          </div>
        </section>
        <div className="flex justify-end space-x-4 mt-8">
          <button className="px-4 py-2 text-gray-800   bg-gray-100 rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out">
            Cancel
          </button>
          <button className="px-4 py-2 text-white   bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
