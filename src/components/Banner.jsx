import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="app-card mb-4 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Plan Today, Secure Tomorrow</h1>
        <p className="text-lg mb-4">
          Manage your income, expenses, and savings effortlessly.
        </p>
        <button className="btn bg-purple-500 border-none text-white btn-primary">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Banner;
