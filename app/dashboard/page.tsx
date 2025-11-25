
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className="text-lg text-gray-500 mb-3">
            Welcome back! Here you can manage your tasks, view analytics , and
            make adjustments
          </p>
        </div>
        {/* Dashboard Grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Task Card */}
          <Link
            className="bg-blue-100 hover:bg-blue-200  p-6  rounded-xl shadow-md hover:shadow-xl active:scale-110 transition-all  duration-500 ease-in-out transform hover:scale-105"
            href="dashboard/tasks"
          >
            <div className="flex items-center justify-between ">
              <h2 className="text-xl font-semibold text-blue-800">Tasks</h2>
              <span className=" text-blue-500 text-2xl  hover:scale-120 transition-all duration-500 ">
                &#128203;
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              View , Organize , and manage your daily tasks.
            </p>
          </Link>
          {/* Analytics Card */}
          <Link
            className="bg-green-100 hover:bg-green-200 p-6 active:scale-110 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            href="dashboard/analytics"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-800 ">
                Analytics
              </h2>
              <span className=" text-blue-500 text-2xl hover:scale-120 transition-all duration-500 ">
                {" "}
                &#128200;
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              Gain insights into your performance and trends.
            </p>
          </Link>
          {/* Settings Card */}
          <Link
            className="bg-purple-100 active:scale-110 hover:bg-purple-200 p-6  rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            href="dashboard/settings"
          >
            <div className="flex items-center justify-between ">
              <h2 className="text-xl font-semibold text-blue-800 ">Settings</h2>
              <span className=" text-blue-500 text-2xl hover:scale-120 hover:rotate-90 transition-all duration-500  ease-in ">
                &#9881;
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              Customize and tweak your dashboard settings.
            </p>
          </Link>
          {/* Users Card */}
          <Link
            className="bg-yellow-100 active:scale-110 hover:bg-yellow-200 p-6  rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
            href="dashboard/users"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-800 ">Users</h2>
              <span className=" text-blue-500 text-2xl   hover:scale-120 transition-all duration-500 ">
                &#128100;
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              View and manage your user base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
