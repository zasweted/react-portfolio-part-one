import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Archive from "./Routes/Archive/Archive";

export const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: 'archive', element: <Archive />},
]);