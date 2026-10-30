import { destinations, site } from "@/content/site";
import { Butterfly } from "./Butterfly";

// The gate's registry: every destination numbered and named, dim until struck.
export function Registry() {
  return (
    <nav aria-label="Primary" className="registry">
      <ol>
        {destinations.map((d) => (
          <li key={d.href}>
            <a href={d.href} data-n={d.n}>
              <Butterfly className="registry-guide" />
              <span className="registry-n">{d.n}</span>
              {d.short}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type ResumeProps = { variant: "tag" | "close" };

export function ResumeLink({ variant }: ResumeProps) {
  const label = variant === "close" ? "Download resume" : "Resume";

  if (!site.resumeHref) {
    return (
      <span className={`resume resume-${variant}`}>
        {label}
        <small>Coming soon</small>
      </span>
    );
  }

  return (
    <a className={`resume resume-${variant}`} href={site.resumeHref} download>
      {label}
      <small>PDF</small>
    </a>
  );
}
