import { site } from "@/content/site";
import { Gate } from "@/components/Gate";
import { Registry } from "@/components/Registry";
import { MobileMenu } from "@/components/MobileMenu";
import { Shelf } from "@/components/Shelf";
import { CordFliers } from "@/components/CordFliers";
import { Companion } from "@/components/Companion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Night } from "@/components/Night";
import { Timecode } from "@/components/Timecode";
import { HellButterflies } from "@/components/HellButterflies";
import { Contributions } from "@/components/Contributions";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Technologies } from "@/components/Technologies";
import { Close } from "@/components/Close";

// schema.org data for search engines: who the site is about, and the profiles that are also them
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: site.about.portrait ? `${site.url}${site.about.portrait}` : undefined,
      jobTitle: site.role,
      description: site.tagline,
      email: `mailto:${site.email}`,
      sameAs: [`https://github.com/${site.github}`, ...site.socials.map((s) => s.href)],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: `${site.name} — Portfolio`, about: { "@id": `${site.url}/#person` } },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#about">
        Skip to the content
      </a>

      <div className="bar">
        <div className="bar-start">
          <a className="bar-name" href="#gate">
            {site.name}
          </a>
          <ThemeToggle id="moon-bar" />
        </div>
        <Registry />
        <MobileMenu />
      </div>

      <Night />
      <Timecode />
      <Companion />
      <HellButterflies />

      <Gate />

      <main>
        <About />

        <section id="work" className="dangai" aria-labelledby="work-title">
          <h2 id="work-title" className="dangai-title">
            Projects
          </h2>
          <Shelf projects={site.projects} />
        </section>

        <div className="thread">
          {/* a group of ink butterflies rides the tip of the cord as it draws */}
          <CordFliers />
          <Experience />
          <Technologies />
        </div>

        <Contributions />
      </main>

      <Close />
    </>
  );
}
