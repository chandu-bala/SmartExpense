import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get("/expenses").then(res => {
      setTotal(res.data.data.reduce((a,b)=>a+b.amount,0));
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <p>Total Spent: ₹{total}</p>
    </div>
  );
}
