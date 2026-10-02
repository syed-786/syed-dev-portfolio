"use client";

import { Suspense } from "react";
import ComingSoonContent from "./ComingSoonContent";

export default function ComingSoonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComingSoonContent />
    </Suspense>
  );
}
