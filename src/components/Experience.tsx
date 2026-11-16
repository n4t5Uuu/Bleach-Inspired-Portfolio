import { site } from "@/content/site";

// The roles, dated beside the cord, each tied on with a knot.
export function Experience() {
  return (
    <section id="path" className="path" aria-labelledby="path-title">
      <h2 id="path-title">Experience</h2>
      <ol className="path-cord">
        {site.experience.map((r) => (
          <li key={r.id}>
            <span className="path-knot" aria-hidden="true" />
            <div className="path-body">
              <h3>
                {r.title}
                <span>{r.org}</span>
              </h3>
              <p className="path-summary">{r.summary}</p>
            </div>
            <p className="path-period">{r.period}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
