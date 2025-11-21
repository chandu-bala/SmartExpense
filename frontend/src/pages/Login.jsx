import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email:"", password:"" });

  const submit = async e => {
    e.preventDefault();
    await login(form.email, form.password);
    nav("/dashboard");
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={submit}>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input className="w-full mb-2 p-2 border" placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" className="w-full mb-2 p-2 border" placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}/>
      <button className="bg-blue-600 text-white p-2 w-full">Login</button>
    </form>
  );
}
