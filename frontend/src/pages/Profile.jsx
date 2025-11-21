import { useAuth } from "../context/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="card">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
}
