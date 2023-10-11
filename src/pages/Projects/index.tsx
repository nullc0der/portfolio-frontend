import { Suspense, lazy } from "react";

import SuspenseLoader from "@/components/SuspenseLoader";

const Component = lazy(async () => await import("./Projects"));

export default function Projects() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component />
    </Suspense>
  );
}
