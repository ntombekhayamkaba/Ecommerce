import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
