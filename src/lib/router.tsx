import { createBrowserRouter } from "react-router-dom";

import App from "@/containers/App";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import ErrorBoundary from "@/components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
