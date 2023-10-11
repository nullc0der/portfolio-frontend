import { Suspense, lazy } from "react";

import SuspenseLoader from "@/components/SuspenseLoader";

const Component = lazy(async () => await import("./Resume"));

export default function Resume() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component />
    </Suspense>
  );
}
