import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await signup(form.name, form.email, form.password);
    navigate("/dashboard");
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={submit}>
      <h2 className="text-xl font-bold mb-4">Create Account</h2>

      <input
        className="w-full mb-2 p-2 border"
        placeholder="Full Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        className="w-full mb-2 p-2 border"
        placeholder="Email"
        type="email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        type="password"
        className="w-full mb-2 p-2 border"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />

      <button className="bg-green-600 text-white p-2 w-full">
        Sign Up
      </button>

      <p className="text-sm mt-3">
        Already have an account? <Link className="text-blue-600" to="/login">Login</Link>
      </p>
    </form>
  );
}
