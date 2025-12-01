import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const TransactionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/finance-all/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (!data) {
          setModel(null);
        } else {
          setModel(data.result);
          setTotalAmount(data.totalAmount);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setModel(null);
        setLoading(false);
      });
  }, [id, user.accessToken]);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (!model) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-red-700">
        <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
          <p className="text-lg font-semibold mb-4">
            ❌ Transaction not found or you don't have access to view it.
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            onClick={() => navigate("/my-transactions")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-l from-sky-200 via-green-200 to-red-200 rounded-xl shadow-lg overflow-hidden mt-8 mb-8 border border-gray-200">
      <div className="relative  px-6 py-6">
        {/* 🔙 Back Button */}
        <button
          className="bg-red-300 px-2 hover:bg-white font-semibold rounded-full"
          onClick={() => navigate("/my-transactions")}
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
          <div className="flex justify-between border border-gray-200 bg-gray-300 p-2 rounded-md shadow-sm">
            <span className="font-semibold text-gray-700">
              Total Amount in "{model.category}" ({model.type}) :
            </span>
            <span className="text-blue-700 font-bold">{totalAmount}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
