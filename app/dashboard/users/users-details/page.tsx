import React from "react";

const userDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    role: "Admin ",
    status: "Active",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nisi odio blanditiis corporis beatae magni eius consectetur deserunt non! Non corporis rerum soluta dignissimos sed at obcaecati nihil nostrum enim!",
    profilePicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    activities: [
      {
        id: 1,
        description: "Updated Password",
        timestamp: "2025-02-10",
      },
      {
        id: 2,
        description: "Changed Email Adress ",
        timestamp: "2025-01-25",
      },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-01-15",
      },
    ],
  };
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover mr-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          />
          <div className="space-y-1">
            <h1 className="text-3xl text-gray-900 font-bold">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-700 font-semibold ">{user.role}</p>
            <p
              className={`text-sm mt-2 ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status : {user.status}
            </p>
          </div>
        </div>
        {/* Bio Section  */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 ">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
        {/* Activites Timeline */}
        <div className="mb-8">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {user.activities.map((activites) => (
              <li
                key={activites.id}
                className="flex items-center space-x-4 shadow-md py-2 px-4 rounded-lg"
              >
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="font-bold">A</span>
                </div>
                <div>
                  <p className="text-lg text-gray-700 ">
                    {activites.description}
                  </p>
                  <p className="text-sm text-gray-500">{activites.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* action section  */}
          <div className="flex justify-end space-x-4 mt-10">
            <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-lg  bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 ease-in-out ">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userDetails;
