import { Suspense, lazy } from "react";

import SuspenseLoader from "@/components/SuspenseLoader";

const Component = lazy(async () => await import("./ProjectDetails"));

export default function ProjectDetails() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component />
    </Suspense>
  );
}
