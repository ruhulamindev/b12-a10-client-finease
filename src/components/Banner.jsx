import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-200 mb-4 via-blue-200 to-purple-300 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Plan Today, Secure Tomorrow</h1>
        <p className="text-lg mb-4">
          Manage your income, expenses, and savings effortlessly.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </section>
    </div>
  );
};

export default Banner;
