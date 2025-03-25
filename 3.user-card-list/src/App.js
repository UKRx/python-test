import UserCardList from "./components/UserCardList";

export default function App() {
  const sampleUsers = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Robert Johnson", email: "robert@example.com" },
    { name: "Sarah Williams", email: "sarah@example.com" },
    { name: "Michael Brown", email: "michael@example.com" },
    { name: "Emily Davis", email: "emily@example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <UserCardList initialUsers={sampleUsers} />
    </div>
  );
}
