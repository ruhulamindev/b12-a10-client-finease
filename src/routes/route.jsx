import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyTransactions from "../pages/MyTransactions";
import AddTransaction from "../pages/AddTransaction";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import TransactionDetails from "../pages/TransactionDetails";
import PrivateRoute from "../components/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import UpdatePage from "../pages/UpdatePage";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../components/DashboardHome";

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
        path: "/my-transactions",
        element: (
          <PrivateRoute>
            <MyTransactions />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          {
            path: "add-transactions",
            element: <AddTransaction />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
        ],
      },
      {
        path: "/transaction-details/:id",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-page/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
