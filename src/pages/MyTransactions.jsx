import { useLoaderData } from "react-router";
import CardModel from "../components/CardModel";
import { useState } from "react";

const MyTransactions = () => {
  const data = useLoaderData();
  // console.log(data)
  const [transactions, setTransactions] = useState(data);

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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-500">
        My Transactions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactions.map((model) => (
          <CardModel
            key={model._id}
            model={model}
            onDelete={handleDelete} // Pass the delete function here
          />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
