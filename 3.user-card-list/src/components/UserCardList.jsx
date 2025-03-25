import React, { useState, useMemo } from "react";
import { SearchBar } from "./SearchBar";
import { UserCard } from "./UserCard";

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
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.email} user={user} />
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
