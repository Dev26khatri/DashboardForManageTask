import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl bg-white mx-auto rounded-lg shadow-xl p-8">
        <h1 className="text-4xl text-gray-800 font-bold mb-8">Users</h1>
        <p className="text-gray-500 text-lg mb-8">
          Message your users here. You can view detailed Information or browser
          a list of users.
        </p>
        {/* User Related Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Link
            href="/dashboard/users/users-details"
            className="bg-teal-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <h1 className="text-xl font-semibold text-teal-800 mb-2">
              User Details
            </h1>
            <p className="text-gray-600">
              View Detailed information about each user in your system
            </p>
          </Link>
          <Link
            href="/dashboard/users/users-list"
            className="bg-orange-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <h1 className="text-xl font-semibold text-orange-800 mb-2">
              User List
            </h1>
            <p className="text-gray-600">
              Browse and manage all users in the system
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
