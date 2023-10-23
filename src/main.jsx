import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import createRoute from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto my-4">
    <React.StrictMode>
      <RouterProvider router={createRoute}></RouterProvider>
    </React.StrictMode>
  </div>
);
