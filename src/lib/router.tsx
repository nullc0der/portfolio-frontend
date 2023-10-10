import { createBrowserRouter } from "react-router-dom";

import App from "@/containers/App";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import ProjectDetails from "@/pages/ProjectDetails";
import Resume from "@/pages/Resume";
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
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":id",
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

export default router;
