import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import createRoute from "./Routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto my-4">
    <React.StrictMode>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={createRoute}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
