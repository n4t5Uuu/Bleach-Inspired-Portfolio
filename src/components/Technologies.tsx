import { site } from "@/content/site";
import { StackSway } from "./StackSway";
import { TechLogo } from "./TechLogo";

// The tools, as paper strips hung from a rail per group.
export function Technologies() {
  return (
    <section id="stack" className="stack" aria-labelledby="stack-title">
      <h2 id="stack-title">Technologies</h2>
      <p className="stack-intro">{site.technologiesIntro}</p>
      <div className="stack-groups">
        {site.technologies.map((g) => (
          <div key={g.label} className="stack-group">
            <h3>{g.label}</h3>
            <ul>
              {g.items.map((item) => (
                <li key={item}>
                  <span className="hang">
                    <span className="gust">
                      <span className="strip">
                        <TechLogo name={item} />
                        {item}
                      </span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {site.technologiesPlaceholder && <p className="placeholder-note">Placeholder technologies</p>}
      </div>
      <StackSway />
    </section>
  );
}
