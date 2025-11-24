import React from "react";

const notication = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-gray-900 text-3xl mb-5 font-bold">Notification</h1>
        {/* Notification Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notificaton Preferences
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Notification{" "}
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition-all duration-300 ease-in-out focus:ring-blue-400 focus:ring-1">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                SMS Notification{" "}
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition-all duration-300 ease-in-out focus:ring-blue-400 focus:ring-1">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 ">
                Push Notification{" "}
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none transition-all duration-300 ease-in-out focus:ring-blue-400 focus:ring-1">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>
        {/* Action Settinga  */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg  bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 ease-in-out ">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default notication;
