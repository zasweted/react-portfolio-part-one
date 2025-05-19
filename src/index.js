import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from './router';
import './index.css';
import GlowEffect from "./Components/GlowEffect/GlowEffect";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlowEffect>
            <RouterProvider router={router} />
        </GlowEffect>
    </React.StrictMode>
);