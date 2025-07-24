import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* React-router を使うための設定 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
