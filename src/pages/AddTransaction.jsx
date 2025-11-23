import React from "react";

const AddTransaction = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add Transaction</h2>

      <form className="space-y-4">
        <div>
          <label className="font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Enter title"
          />
        </div>

        <div>
          <label className="font-medium">Amount</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="font-medium">Type</label>
          <select className="w-full border rounded p-2">
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Date</label>
          <input type="date" className="w-full border rounded p-2" />
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-bold">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
