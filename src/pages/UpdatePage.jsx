import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdatePage = () => {
  const data = useLoaderData();
  const model = data.result;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      type: e.target.type.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
    };
    fetch(`http://localhost:5000/finance-all/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Updated!");
        navigate("/my-transactions");
      })
      .catch((err) => {
        toast.error("Update failed! Try again.");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-6 mb-4">
      <h2 className="text-2xl font-bold text-purple-500 text-center mb-4">
        Update Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="font-medium mb-1 block">Type</label>
          <select
            type="text"
            defaultValue={model.type}
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
            defaultValue={model.category}
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
            defaultValue={model.amount}
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
            defaultValue={model.description}
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
            defaultValue={model.date}
            name="date"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 rounded font-bold text-white ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isLoading ? "Updating..." : "Update Transaction"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
