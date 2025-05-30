import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Home from "./pages/Home";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Home /> */}
  </StrictMode>
);
