import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import * as Sentry from "@sentry/react";

import "@fontsource-variable/inter";

import router from "@/lib/router";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
