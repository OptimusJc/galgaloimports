import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import Error_404 from "./Error_404.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Error_404 />
  </StrictMode>,
);
