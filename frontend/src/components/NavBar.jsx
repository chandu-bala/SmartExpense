import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function NavBar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div className="navbar">
      <h2>ExpenseFlow</h2>

      {!user ? (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      ) : (
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={() => { logout(); nav("/login"); }}>Logout</button>
        </div>
      )}
    </div>
  );
}
