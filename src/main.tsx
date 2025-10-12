import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* 👇 This tells React Router your app lives under /fruitunion-nexus/ */}
        <BrowserRouter basename="/fruitunion-nexus">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
