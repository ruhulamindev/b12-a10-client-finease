import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const AddTransaction = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      type: e.target.type.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
      email: user?.email,
      name: user?.displayName,
    };
    fetch("http://localhost:5000/finance-all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-6 mb-4">
      <h2 className="text-2xl font-bold text-purple-500 text-center mb-4">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="font-medium mb-1 block">Type</label>
          <select
            type="text"
            name="type"
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="font-medium mb-1 block">Category</label>
          <select
            name="category"
            defaultValue={""}
            className="w-full border rounded p-2"
            required
          >
            <option value="disabled">Select Category</option>
            <option>Food</option>
            <option>Shopping</option>
            <option>Salary</option>
            <option>Gift</option>
            <option>Medicine</option>
            <option>Transport</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="font-medium mb-1 block">Amount</label>
          <input
            type="number"
            name="amount"
            className="w-full border rounded p-2"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium mb-1 block">Description</label>
          <textarea
            name="description"
            className="w-full border rounded p-2"
            rows="2"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="font-medium mb-1 block">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4 bg-gray-100 p-2 rounded">
          <p>
            Name: <strong>{user?.displayName || "Default Name"}</strong>
          </p>
          <p>
            Email: <strong>{user?.email || "example@gmail.com"}</strong>
          </p>
        </div>

        {/* Submit */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-bold">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
