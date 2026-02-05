import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/times.ttf"
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
