import React from "react";

const CardModel = ({ model }) => {
  const { type, category, amount, date, _id } = model;
  return (
    <div className="bg-gradient-to-l from-blue-50 via-blue-300 to-blue-200 shadow-md p-4 rounded-lg">
      <h3 className="font-bold text-lg">{type}</h3>
      <p className="text-sm text-gray-800">{category}</p>
      <p
        className={`mt-2 font-bold ${
          type === "Income" ? "text-green-600" : "text-red-600"
        }`}
      >
        {type}: {amount}$
      </p>
      <p className="text-sm text-gray-700 mt-2">{date}</p>

      <div className="flex gap-2 mt-4">
        <button className="bg-purple-500 text-white px-3 py-1 rounded">
          Update
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardModel;
