import type { Metadata } from "next";
import Link from "next/link";
import { Lost } from "@/components/Lost";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Lost
      code="404"
      title="This gate opens onto nothing."
      body="The page you were looking for isn't here. It may have moved, or the link may be wrong."
    >
      <Link className="close-contact" href="/">
        Back to the gate
      </Link>
    </Lost>
  );
}
