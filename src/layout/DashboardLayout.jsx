import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import MyContainer from "../components/MyContainer";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MyContainer>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mb-4 px-4 py-2 bg-purple-500 text-white rounded flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl">{open ? "✖" : "☰"}</span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </MyContainer>

      <div className="flex flex-col md:flex-row gap-6 mb-2 min-h-[70vh]">
        {/* SIDEBAR */}
        <aside
          className={`md:w-[30%] lg:w-[25%] app-card p-4 ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>

          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `block px-3 py-2 rounded border border-gray-300 ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-100 hover:text-black"
                  }`
                }
              >
                🏠 Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded border border-gray-300 ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-100 hover:text-black"
                  }`
                }
              >
                📊 Reports
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/add-transactions"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded border border-gray-300 ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-100 hover:text-black"
                  }`
                }
              >
                ➕ Add Transaction
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 md:w-[70%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
