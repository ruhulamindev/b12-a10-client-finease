import React from "react";
import MyContainer from "./MyContainer";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    Signin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-transactions"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    Add Transaction
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-transactions"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    My Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                      `btn ${
                        isActive
                          ? "bg-purple-500 text-white border-none"
                          : "btn-outline"
                      }`
                    }
                  >
                    Reports
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="text-2xl md:text-3xl font-bold">
              Finance
            </NavLink>
          </div>
          <div className="navbar-center gap-50 hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-transactions"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  Add Transaction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-transactions"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  My Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-3 space-x-2">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `btn ${
                  isActive
                    ? "bg-purple-500 text-white border-none"
                    : "btn-outline"
                }`
              }
            >
              Sign In
            </NavLink>

            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                `btn ${
                  isActive
                    ? "bg-purple-500 text-white border-none"
                    : "btn-outline"
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
