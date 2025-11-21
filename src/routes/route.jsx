import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyTransactions from "../pages/MyTransactions";
import AddTransaction from "../pages/AddTransaction";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import TransactionDetails from "../pages/TransactionDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/my-transactions",
        element: <MyTransactions />,
      },
      {
        path: "/add-transactions",
        element: <AddTransaction />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/transaction-details",
        element: <TransactionDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
