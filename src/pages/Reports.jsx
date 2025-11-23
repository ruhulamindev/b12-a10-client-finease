import React from "react";

const Reports = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Reports</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Total Income</h3>
          <p className="text-2xl font-bold">20,000৳</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Total Expense</h3>
          <p className="text-2xl font-bold">5,000৳</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Balance</h3>
          <p className="text-2xl font-bold">15,000৳</p>
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Monthly Report Chart</h3>
        <div className="w-full h-40 bg-gray-200 rounded animate-pulse"></div>
        <p className="text-sm mt-2 text-gray-600">
          (Chart placeholder – just UI)
        </p>
      </div>
    </div>
  );
};

export default Reports;
