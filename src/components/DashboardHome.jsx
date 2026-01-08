import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Overview from "./Overview";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="app-card p-6 m-2 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-2">
        Welcome, {user?.displayName || "User"} 👋
      </h2>

      <p className="text-gray-600 mb-4">
        Manage your income, expenses, and financial reports from one place.
      </p>
      <div>
        <Overview />
      </div>
    </div>
  );
};

export default DashboardHome;
