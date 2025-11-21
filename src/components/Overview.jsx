import React from "react";

const Overview = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4 my-2">
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-gray-500">Total Balance</h3>
          <p className="text-2xl font-bold">$5,230</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md text-center">
          <h3 className="text-gray-500">Income</h3>
          <p className="text-2xl font-bold">$3,000</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow-md text-center">
          <h3 className="text-gray-500">Expenses</h3>
          <p className="text-2xl font-bold">$1,770</p>
        </div>
      </section>
    </div>
  );
};

export default Overview;
