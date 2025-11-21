import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    api.get("/expenses").then(res=>{
      const sum = res.data.data.reduce((a,b)=>a+b.amount,0);
      setTotal(sum);
    });
  },[]);

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Total Expenses: ₹{total}</p>
    </div>
  );
}
