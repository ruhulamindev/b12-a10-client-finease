import { use, useEffect, useState } from "react";
import CardModel from "../components/CardModel";
import LoadingSpinner from "../components/LoadingSpinner";
import AuthContext from "../contexts/AuthContext";

const MyTransactions = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  // Initial Load---Fetch only user's data
  useEffect(() => {
    fetch(`http://localhost:5000/finance-all`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions(Array.isArray(data) ? data : data.result || []);
        setLoading(false);
      });
  }, [user.email]);

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
      if (!sortBy || !order) return;

      const res = await fetch(
        `http://localhost:5000/finance-all?email=${user.email}&sortBy=${sortBy}&order=${order}`,
        {
          headers: { authorization: `Bearer ${user.accessToken}` },
        }
      );

      const data = await res.json();
      setTransactions(Array.isArray(data) ? data : data.result || []);
    };

    fetchTransactions();
  }, [sortBy, order, user.email]);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-500">
        My Transactions
      </h2>
      <div className="flex justify-center gap-4 mb-4 bg-gray-100 p-2 rounded">
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
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setOrder("asc")}
            className={`px-2 py-1 border rounded ${
              order === "asc" ? "bg-purple-500 text-white" : ""
            }`}
          >
            ⬅️
          </button>
          <button
            onClick={() => setOrder("desc")}
            className={`px-2 py-1 border rounded ${
              order === "desc" ? "bg-purple-500 text-white" : ""
            }`}
          >
            ➡️
          </button>
        </div>

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
