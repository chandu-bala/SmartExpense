

import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";


export default function Login() {
const { login } = useAuth();
const navigate = useNavigate();
const [form, setForm] = useState({ email: "", password: "" });
const [error, setError] = useState("");


const submit = async (e) => {
e.preventDefault();
try {
await login(form.email, form.password);
navigate("/dashboard");
} catch  {
setError("Invalid credentials");
}
};


return (
<div className="auth-container">
<div className="auth-card">
<h2>Login</h2>
{error && <p className="error">{error}</p>}
<form onSubmit={submit}>
<input placeholder="Email" value={form.email}
onChange={e => setForm({ ...form, email: e.target.value })} />
<input type="password" placeholder="Password" value={form.password}
onChange={e => setForm({ ...form, password: e.target.value })} />
<button className="btn-primary">Login</button>
</form>
</div>
</div>
);
}