import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Overview = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4 my-2">
        <motion.div
          className="p-4 bg-white rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-gray-500">Total Balance</h3>
          <p className="text-2xl font-bold">$5,230</p>
        </motion.div>

        <motion.div
          className="p-4 bg-green-100 rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-gray-500">Income</h3>
          <p className="text-2xl font-bold">$3,000</p>
        </motion.div>

        <motion.div
          className="p-4 bg-red-100 rounded-lg shadow-md text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-gray-500">Expenses</h3>
          <p className="text-2xl font-bold">$1,770</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Overview;
