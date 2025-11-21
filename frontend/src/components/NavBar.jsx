import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold">ExpenseFlow</h1>
      {user ? (
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={() => { logout(); navigate("/login"); }} className="text-red-500">Logout</button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}
