import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Reports = () => {
  const [transactions, setTransactions] = useState([]);
  const [monthFilter, setMonthFilter] = useState("");
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/finance-all");
        let data = res.data;

        // Filter by month if selected
        if (monthFilter) {
          data = data.filter((t) => t.date.startsWith(monthFilter));
        }

        setTransactions(data);

        // Calculate summary
        let totalIncome = 0;
        let totalExpense = 0;
        data.forEach((t) => {
          if (t.type === "Income") totalIncome += t.amount;
          if (t.type === "Expense") totalExpense += t.amount;
        });

        setSummary({
          totalIncome,
          totalExpense,
          balance: totalIncome + totalExpense,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [monthFilter]);

  // Pie Chart Data (Category-wise Expense)
  const expenseCategories = {};
  transactions.forEach((t) => {
    if (t.type === "Expense") {
      expenseCategories[t.category] =
        (expenseCategories[t.category] || 0) + t.amount;
    }
  });
  const pieData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        label: "Expense by Category",
        data: Object.values(expenseCategories),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Bar Chart Data (Monthly Totals)
  const monthlyTotals = {};
  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM
    if (!monthlyTotals[month]) monthlyTotals[month] = { Income: 0, Expense: 0 };
    monthlyTotals[month][t.type] += t.amount;
  });
  const barData = {
    labels: Object.keys(monthlyTotals),
    datasets: [
      {
        label: "Income",
        data: Object.values(monthlyTotals).map((m) => m.Income),
        backgroundColor: "green",
      },
      {
        label: "Expense",
        data: Object.values(monthlyTotals).map((m) => m.Expense),
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Reports</h2>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Income</h3>
          <p className="text-2xl font-bold">{summary.totalIncome}$</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Expense</h3>
          <p className="text-2xl font-bold">{summary.totalExpense}$</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">Total Balance</h3>
          <p className="text-2xl font-bold">{summary.balance}$</p>
        </div>
      </div>

      {/* Month Filter */}
      <div className="mb-6 text-center">
        <label className="mr-2 font-bold">Filter by Month:</label>
        <input
          type="month"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="border rounded p-2"
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-center">
            Category-wise Expense
          </h3>
          <Pie data={pieData} />
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-center">Monthly Totals</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
