import { useState, useEffect } from "react";
import api from "../services/api";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ amount:"", category:"" });

  const load = () => api.get("/expenses").then(r=>setExpenses(r.data.data));
  useEffect(()=>load(), []);


  const submit = async e => {
    e.preventDefault();
    await api.post("/expenses", form);
    load();
  };

  return (
    <div>
      <form className="card" onSubmit={submit}>
        <input placeholder="Amount" onChange={e=>setForm({...form,amount:e.target.value})}/>
        <input placeholder="Category" onChange={e=>setForm({...form,category:e.target.value})}/>
        <button className="btn">Add</button>
      </form>

      {expenses.map(e=>(
        <div key={e._id} className="card">
          ₹{e.amount} - {e.category}
        </div>
      ))}
    </div>
  );
}
