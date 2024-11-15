// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Archive from "./Routes/Archive/Archive";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: 'archive',
    element: (
      <>
        <ScrollToTop />
        <Archive />
      </>
    ),
  },
]);
