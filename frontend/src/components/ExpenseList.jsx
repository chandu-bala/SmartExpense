export default function ExpenseList({ expenses = [], onEdit, onDelete }) {
  if (!expenses.length)
    return <div className="bg-white p-4 rounded shadow">No expenses found</div>;

  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      {expenses.map(exp => (
        <div key={exp._id} className="flex justify-between border-b pb-2">
          <div>
            <p className="font-semibold">₹{exp.amount} - {exp.category}</p>
            <p className="text-sm text-gray-600">{new Date(exp.date).toDateString()}</p>
            <p className="text-sm">{exp.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button onClick={() => onEdit(exp)} className="text-blue-600 text-sm">Edit</button>
            <button onClick={() => onDelete(exp._id)} className="text-red-600 text-sm">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
