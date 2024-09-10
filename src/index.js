//import { createRoot } from "react-dom/client";

//const container = document.getElementById("root");
//const root = createRoot(container);
//root.render(
//  <BrowserRouter>
//    <App />
//  </BrowserRouter>
//);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);