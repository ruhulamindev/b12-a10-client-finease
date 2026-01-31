import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/add-transactions");
  };
  return (
    <div>
      <section className="app-card mb-4 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Plan Today, Secure Tomorrow</h1>
        <p className="text-lg mb-4">
          Manage your income, expenses, and savings effortlessly.
        </p>
        <button
          onClick={handleClick}
          className="btn bg-purple-500 border-none text-white btn-primary"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Banner;
