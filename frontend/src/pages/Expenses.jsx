import { useEffect, useState } from "react";
import api from "../services/api";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ amount:'', category:'' });

  const load = () => api.get("/expenses").then(r => setExpenses(r.data.data));

  useEffect(load, []);

  const submit = async e => {
    e.preventDefault();
    await api.post("/expenses", form);
    load();
  };

  return (
    <div>
      <form onSubmit={submit} className="bg-white p-4 rounded mb-4">
        <input className="border p-2" placeholder="Amount"
          onChange={e=>setForm({...form,amount:e.target.value})}/>
        <input className="border p-2 ml-2" placeholder="Category"
          onChange={e=>setForm({...form,category:e.target.value})}/>
        <button className="bg-green-600 text-white p-2 ml-2">Add</button>
      </form>

      {expenses.map(exp=>(
        <div key={exp._id} className="bg-white p-3 rounded mb-2">
          ₹{exp.amount} - {exp.category}
        </div>
      ))}
    </div>
  );
}
