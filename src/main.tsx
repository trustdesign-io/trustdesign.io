import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./01_foundation/color/color.css";
import "./01_foundation/reset/reset.css";
import "./01_foundation/dimension/dimension.css";
import "./01_foundation/duration/duration.css";
import "./01_foundation/typography/typography.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
