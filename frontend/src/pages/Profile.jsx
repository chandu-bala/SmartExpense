import { useAuth } from "../context/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}
