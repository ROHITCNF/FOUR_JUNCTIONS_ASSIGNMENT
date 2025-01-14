import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import ErrorRoute from "./components/ErrorRoute";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add_movie",
        element: <AddMovie />,
      },
      {
        path :"/movie/details/:movieId",
        element : <MovieDescription/>
      }
    ],
    errorElement: <ErrorRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
