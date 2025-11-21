import { useState } from "react";

const emptyForm = {
  amount: "",
  category: "",
  description: "",
  date: ""
};

export default function ExpenseForm({ onCreate, editing, onUpdate }) {
  const [form, setForm] = useState(
    editing
      ? {
          amount: editing.amount,
          category: editing.category,
          description: editing.description || "",
          date: editing.date ? editing.date.split("T")[0] : ""
        }
      : emptyForm
  );

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      amount: Number(form.amount)
    };

    if (editing) {
      onUpdate(editing._id, payload);
    } else {
      onCreate(payload);
    }

    setForm(emptyForm);
  };

  return (
    <form
      key={editing ? editing._id : "new"}   // ✅ critical line
      onSubmit={submit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <h3 className="font-semibold">
        {editing ? "Edit Expense" : "Add Expense"}
      </h3>

      <input
        className="w-full border p-2"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })}
        required
      />

      <input
        className="w-full border p-2"
        placeholder="Category"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
        required
      />

      <input
        className="w-full border p-2"
        type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
        required
      />

      <textarea
        className="w-full border p-2"
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        {editing ? "Update" : "Add"}
      </button>
    </form>
  );
}
