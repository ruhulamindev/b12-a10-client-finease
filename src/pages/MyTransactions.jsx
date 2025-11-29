import { useLoaderData } from "react-router";
import CardModel from "../components/CardModel";
import { useEffect, useState } from "react";

const MyTransactions = () => {
  const data = useLoaderData();
  // console.log(data)
  const [transactions, setTransactions] = useState(data);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/finance-all/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // remove deleted item from state
          setTransactions((prev) => prev.filter((t) => t._id !== id));
        }
      });
  };

  // Fetch with sorting
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!sortBy || (sortBy === "date" && !order)) return;
      const res = await fetch(
        `http://localhost:5000/finance-all?sortBy=${sortBy}&order=${order}`
      );
      const data = await res.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, [sortBy, order]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-500">
        My Transactions
      </h2>
      <div className="flex gap-2 mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="" disabled>
            Order
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactions.map((model) => (
          <CardModel key={model._id} model={model} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
