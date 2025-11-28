import React from "react";
import { useLoaderData } from "react-router";

const TransactionDetails = () => {
  const data = useLoaderData();
  const model = data.result;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-l from-sky-200 via-green-200 to-red-200 rounded-xl shadow-lg overflow-hidden mt-8 mb-8 border border-gray-200">
      <div className="relative  px-6 py-6">
        {/* 🔙 Back Button */}
        <button
          onClick={() => (window.location.href = "/my-transactions")}
          className="absolute top-3 left-3 bg-red-300 shadow px-3 py-1 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold text-center text-purple-500 mb-4">
          Transaction Details
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border border-gray-200 p-2">
            <span className="font-semibold text-gray-700">Type :</span>
            <span className="text-gray-900 capitalize">{model.type}</span>
          </div>

          <div className="text-left border border-gray-200 p-2">
            <span className="font-semibold text-gray-700">Description : </span>
            <span className="text-gray-900">{model.description}</span>
          </div>

          <div className="flex justify-between border border-gray-200 p-2">
            <span className="font-semibold text-gray-700">Amount :</span>
            <span className="text-green-600 font-bold">{model.amount}$</span>
          </div>

          <div className="flex justify-between border border-gray-200 p-2">
            <span className="font-semibold text-gray-700">Date :</span>
            <span className="text-gray-900">
              {new Date(model.date).toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between border border-gray-200 p-2">
            <span className="font-semibold text-gray-700">Category :</span>
            <span className="text-gray-900 capitalize">{model.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
