import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/css/global.css";
import "./assets/css/pages/auth/auth.css";
import "./assets/css/components/components.css";
import "./assets/css/pages/home/home.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
