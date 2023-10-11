import { Suspense, lazy } from "react";

import SuspenseLoader from "@/components/SuspenseLoader";

const Component = lazy(async () => await import("./Home"));

export default function Home() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component />
    </Suspense>
  );
}
