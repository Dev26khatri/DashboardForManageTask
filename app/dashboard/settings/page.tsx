import React from "react";
import Link from "next/link";
const Settings = () => {
  return (
    <div className="min-h-screen p-8 ">
      <div className="max-w-7xl  max-auto bg-white rounded-lg shadow-lg  p-8 ">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Settings</h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          Customize your account settings, Profile, and Notification here.
          Choose an option from the sidebar to begin
        </p>
        <div className="flex space-x-12">
          <div className="w-1/4 bg-white rounded-lg space-x-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="flex items-center text-lg  hover:text-indigo-600 transition-all  py-2 px-4 rounded-lg hover:bg-indigo-50"
                  href="settings/acounts"
                >
                  <span> Accounts</span>
                </Link>
                <Link
                  className="flex items-center text-lg  hover:text-yellow-600 transition-all  py-2 px-4 rounded-lg hover:bg-yellow-50"
                  href="settings/notification"
                >
                  <span>Notification</span>
                </Link>
                <Link
                  className="flex items-center text-lg  hover:text-green-600 transition-all duration-400 py-2 px-4 rounded-lg hover:bg-green-50"
                  href="settings/profile"
                >
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex-1 bg-white  shadow-md rounded-lg p-8">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">
              Select A Settings
            </h2>
            <p className="text-lg text-gray-500 max-2-3xl">
              Choose an option from the sidebar to manage your account,
              notification , or profile settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
