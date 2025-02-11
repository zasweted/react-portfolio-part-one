// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Archive from "./Routes/Archive/Archive";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import PageNotFound from './Components/PageNotFound/PageNotFound';

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
  {
    path: '*',
    element: (
      <>
        <ScrollToTop />
        <PageNotFound />
      </>
    ),
  },
]);
