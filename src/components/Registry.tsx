import { destinations, site } from "@/content/site";
import { Butterfly } from "./Butterfly";

// The gate's registry: every destination numbered and named, dim until struck.
export function Registry() {
  return (
    <nav aria-label="Primary" className="registry">
      <ol>
        {destinations.map((d) => (
          <li key={d.href}>
            <a href={d.href}>
              <Butterfly className="registry-guide" />
              <span className="registry-n">{d.n}</span>
              {d.label}
            </a>
          </li>
        ))}
        <li>
          <ResumeLink variant="registry" />
        </li>
      </ol>
    </nav>
  );
}

type ResumeProps = { variant: "registry" | "tag" | "close" };

export function ResumeLink({ variant }: ResumeProps) {
  const label = variant === "close" ? "Download resume" : "Resume";
  const n = variant === "registry" ? <span className="registry-n">04</span> : null;
  const guide = variant === "registry" ? <Butterfly className="registry-guide" /> : null;

  if (!site.resumeHref) {
    return (
      <span className={`resume resume-${variant}`}>
        {guide}
        {n}
        {label}
        <small>Coming soon</small>
      </span>
    );
  }

  return (
    <a className={`resume resume-${variant}`} href={site.resumeHref} download>
      {guide}
      {n}
      {label}
      <small>PDF</small>
    </a>
  );
}
