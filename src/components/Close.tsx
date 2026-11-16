import { site } from "@/content/site";
import { ResumeLink } from "./Registry";
import { Tassel } from "./Tassel";

// The gate seen from the far side: the doors close on the contact and the resume.
export function Close() {
  return (
    <footer id="close" className="close">
      <div className="close-door close-door-l" aria-hidden="true" />
      <div className="close-door close-door-r" aria-hidden="true" />
      <div className="close-center">
        <Tassel className="close-tassel" />
        <h2>Let&apos;s talk.</h2>
        <div className="close-actions">
          {site.contactHref ? (
            <a className="close-contact" href={site.contactHref}>
              Get in touch
            </a>
          ) : (
            <span className="close-contact pending">Contact method, add later</span>
          )}
          <ResumeLink variant="close" />
        </div>
        <a className="close-email" href={`mailto:${site.email}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" />
            <path d="m3 6 9 7 9-7" />
          </svg>
          {site.email}
        </a>
        <ul className="close-links">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="close-credit">
          Inspired by <cite>Bleach</cite> by Tite Kubo. Everything drawn here is original; this
          site is not affiliated with the series.
        </p>
      </div>
    </footer>
  );
}
