import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getIdToken } from "firebase/auth";
import { auth } from "../fairbase/fairbase.config";

const CardModel = ({ model, onDelete }) => {
  const { type, category, amount, date, _id } = model;
  
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
      if (result.isConfirmed) {
        try{
          const token = await getIdToken(auth.currentUser);
          const res = await fetch(`https://b12-a10-server-finease.vercel.app/finance-all/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          onDelete(_id);
            } else {
              Swal.fire("Error!", data.message, "error");
            }
          }catch(err) {
            console.log(err);
            toast.error("Delete failed! Try again.");
          }
      }
  };

  
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
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <div className="flex gap-2 mt-4">
        <Link
          to={`/update-page/${model._id}`}
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Update
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
        <Link
          to={`/transaction-details/${_id}`}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CardModel;
