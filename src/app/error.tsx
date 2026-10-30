"use client"; // error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import { Lost } from "@/components/Lost";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Lost
      code="500"
      title="Something broke on the way through."
      body="This page failed to load. Try again, or head back to the start."
    >
      <button type="button" className="close-contact" onClick={() => retry()}>
        Try again
      </button>
      <Link className="close-contact" href="/">
        Back to the gate
      </Link>
    </Lost>
  );
}
