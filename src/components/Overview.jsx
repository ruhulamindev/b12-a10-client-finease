import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
// import LoadingSpinner from "./LoadingSpinner";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [overview, setOverview] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      // setLoading(true);
      try {
        const res = await fetch(
          "https://b12-a10-server-finease.vercel.app/overview",
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        const data = await res.json();
        if (data.success) {
          setOverview({
            totalBalance: data.totalBalance,
            totalIncome: data.totalIncome,
            totalExpense: data.totalExpense,
          });
        }
      } catch (err) {
        console.error("Failed to fetch overview:", err);
      }

      // finally {
      //   setLoading(false);
      // }
    };

    if (user?.accessToken) fetchOverview();
  }, [user?.accessToken]);

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4 my-2">
        <div className="p-4 app-card rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">Total Amount</h3>
          <p className="text-2xl font-bold">${overview.totalBalance}</p>
        </div>
        <div className="p-4 app-card rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">Income</h3>
          <p className="text-2xl font-bold">${overview.totalIncome}</p>
        </div>
        <div className="p-4 app-card rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold">Expenses</h3>
          <p className="text-2xl font-bold">${overview.totalExpense}</p>
        </div>
      </section>
    </div>
  );
};

export default Overview;
