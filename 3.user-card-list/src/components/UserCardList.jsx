import React, { useState, useMemo } from "react";

const UserCardList = ({ initialUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(
    () =>
      initialUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [initialUsers, searchTerm]
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.email}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
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
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No users found matching your search.
        </div>
      )}
    </div>
  );
};

export default UserCardList;
