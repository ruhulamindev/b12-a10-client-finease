import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Overview = () => {
  const [overview, setOverview] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch("http://localhost:5000/overview");
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
    };

    fetchOverview();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4 my-2">
        <motion.div
          className="p-4 bg-blue-500 rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-white">Total Amount</h3>
          <p className="text-2xl font-bold text-white">
            ${overview.totalBalance}
          </p>
        </motion.div>

        <motion.div
          className="p-4 bg-green-500 rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-white">Income</h3>
          <p className="text-2xl font-bold text-white">
            ${overview.totalIncome}
          </p>
        </motion.div>

        <motion.div
          className="p-4 bg-red-500 rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white">Expenses</h3>
          <p className="text-2xl font-bold text-white">
            ${overview.totalExpense}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Overview;
