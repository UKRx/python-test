import React from "react";

export const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
          <span className="text-white text-lg font-semibold">
            {user.name[0].toUpperCase()}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {user.name}
        </h3>
        <p className="text-sm text-gray-600 truncate">{user.email}</p>
      </div>
    </div>
  );
};
