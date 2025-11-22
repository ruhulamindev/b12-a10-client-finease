import React from "react";
import MyContainer from "./MyContainer";
import { useNavigate, NavLink } from "react-router";
import { useAuth } from "../contexts/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

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
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "default-profile.png"}
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max mt-4 gap-1"
                >
                  <li>
                    <span className="font-semibold border-b">{user.email}</span>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        `btn ${
                          isActive
                            ? "bg-purple-500 text-white border-none"
                            : "btn-outline"
                        }`
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <a className="btn border-gray-500 bg-white">Settings</a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn border-gray-500 bg-white"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
