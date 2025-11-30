import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import { useNavigate, NavLink } from "react-router";
import { useAuth } from "../contexts/useAuth";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Dark/Light Mode Incomplete Just Show
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="mb-[-55px] bg-base-100 shadow-sm">
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
                {!user && (
                  <>
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
                  </>
                )}

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
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
          <div className="navbar-end mr-3 space-x-2 flex items-center">
            {/* Dark/Light Mode Incomplete Just Show */}
            {user && (
              <div
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-700 border-2 border-green-500"
                    : "bg-sky-100 border-2 border-green-500"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                    darkMode ? "translate-x-7" : "translate-x-0"
                  } flex items-center justify-center`}
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 4.5V2m0 20v-2.5m7.07-7.07H22M2 12h2.5m15.36 4.95l1.77 1.77M4.95 4.95l1.77 1.77m12.02 12.02l1.77 1.77M4.95 19.05l1.77-1.77M12 6a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                  )}
                </div>
              </div>
            )}

            {user ? (
              <div className="dropdown dropdown-end">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full border-green-500 rounded-full border-2">
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
                    <li className="bg-gray-200">
                      <h1 className="font-semibold text-xl">
                        {user.displayName || "No Name"}
                      </h1>
                      <span className="font-semibold">{user.email}</span>
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
                </motion.div>
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
