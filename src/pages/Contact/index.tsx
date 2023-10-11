import { Suspense, lazy } from "react";

import SuspenseLoader from "@/components/SuspenseLoader";

const Component = lazy(async () => await import("./Contact"));

export default function Contact() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Component />
    </Suspense>
  );
}
