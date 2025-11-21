

import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";


export default function Signup() {
const { signup } = useAuth();
const navigate = useNavigate();
const [form, setForm] = useState({ name: "", email: "", password: "" });
const [error, setError] = useState("");


const submit = async (e) => {
e.preventDefault();
try {
await signup(form.name, form.email, form.password);
navigate("/dashboard");
} catch  {
setError("Account creation failed");
}
};


return (
<div className="auth-container">
<div className="auth-card">
<h2>Create Account</h2>
{error && <p className="error">{error}</p>}
<form onSubmit={submit}>
<input placeholder="Name" value={form.name}
onChange={e => setForm({ ...form, name: e.target.value })} />
<input placeholder="Email" value={form.email}
onChange={e => setForm({ ...form, email: e.target.value })} />
<input type="password" placeholder="Password" value={form.password}
onChange={e => setForm({ ...form, password: e.target.value })} />
<button className="btn-primary">Create Account</button>
</form>
</div>
</div>
);
}