import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { getIdToken } from "firebase/auth";
import { auth } from "./../fairbase/fairbase.config";
import LoadingSpinner from "../components/LoadingSpinner";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        if (!auth.currentUser) return; // check login
        const token = await getIdToken(auth.currentUser);
        const res = await fetch(`http://localhost:5000/finance-all/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setModel(data.result);
        else toast.error(data.message || "Failed to load transaction");
      } catch (err) {
        toast.error("Failed to load transaction");
        console.log(err);
      }
    };
    fetchTransaction();
  }, [id]);

  if (!model)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      type: e.target.type.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: e.target.date.value,
    };
    try {
      const token = await getIdToken(auth.currentUser);
      const res = await fetch(
        `http://localhost:5000/finance-all/${model._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Successfully Updated!");
        navigate(`/transaction-details/${model._id}`);
      } else {
        toast.error(data.message || "Update failed!");
      }
    } catch (err) {
      toast.error("Update failed! Try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
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
