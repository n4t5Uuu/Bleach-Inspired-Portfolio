import { cacheLife } from "next/cache";
import { site } from "@/content/site";

type Day = { date: string; contributionCount: number; contributionLevel: string };

const LEVELS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];

const QUERY = `query ($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar { totalContributions weeks { contributionDays { date contributionCount contributionLevel } } }
    }
  }
}`;

// The last year of GitHub contributions, cached for a day. Needs GITHUB_TOKEN (a read-only token);
// without it, or when GitHub fails, there is nothing to show.
async function getCalendar(login: string) {
  "use cache";
  cacheLife("days");
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
    });
    if (!res.ok) return null;
    const cal = (await res.json()).data?.user?.contributionsCollection.contributionCalendar;
    if (!cal) return null;
    return {
      total: cal.totalContributions as number,
      weeks: (cal.weeks as { contributionDays: Day[] }[]).map((w) => w.contributionDays),
    };
  } catch {
    return null;
  }
}

// A year of days on the cord: one column a week, shaded by how much was committed that day.
// The section is left out when there is no calendar.
export async function Contributions() {
  const cal = await getCalendar(site.github);
  if (!cal) return null;
  const total = cal.total.toLocaleString("en");

  return (
    <section id="commits" className="stack commits" aria-labelledby="commits-title">
      <h2 id="commits-title">Contributions</h2>
      <div className="commits-body">
        <p className="commits-total">
          <strong>{total}</strong> contributions on GitHub in the last year
        </p>
        <div className="commits-grid" role="img" aria-label={`Contribution calendar: ${total} in the last year`}>
          {cal.weeks.map((week) => (
            <div key={week[0].date} className="commits-week">
              {week.map((d) => (
                <span
                  key={d.date}
                  data-level={LEVELS.indexOf(d.contributionLevel)}
                  title={`${d.contributionCount} on ${d.date}`}
                />
              ))}
            </div>
          ))}
        </div>
        <a className="commits-link" href={`https://github.com/${site.github}`}>
          github.com/{site.github}
        </a>
      </div>
    </section>
  );
}
