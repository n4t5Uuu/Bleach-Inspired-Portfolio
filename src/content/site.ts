// Every value here is placeholder content until the real details are supplied.
// Replace the strings and flip each section's `placeholder` flag to false as it becomes real.

export type Project = {
  slug: string;
  title: string;
  verse: string;
  summary: string;
  role: string;
  stack: string[];
  year: string;
  liveUrl: string | null;
  sourceUrl: string | null;
  // Set once the project has its own case-study page.
  caseStudyUrl: string | null;
};

export type Role = {
  id: string;
  title: string;
  org: string;
  period: string;
  summary: string;
};

export const site = {
  name: "Your Name",
  role: "Software Developer",
  // One plain line a recruiter can read at a glance: what you build, for whom.
  tagline: "One plain line on what you build and who it is for.",
  taglinePlaceholder: true,
  // The gate opens on one of these, picked at random on each visit.
  // Original verses in the spirit of a volume's opening poem: replace or add your own.
  // Three lines each, about 14 characters per line, so each stands in one column on the doors.
  verses: [
    ["A blade waits", "for a hand", "steady enough"],
    ["The moon cuts", "no shadow", "it cannot keep"],
    ["I walk ahead", "so the dark", "walks behind"],
    ["Fear is a door", "I have opened", "every morning"],
    ["Let it rain", "the fire I am", "does not drown"],
    ["What I protect", "is the reason", "I stand"],
    ["Name the storm", "and it becomes", "a blade"],
    ["No heart beats", "for nothing", "not even mine"],
    ["Ash is only", "fire that", "chose to rest"],
    ["The gate opens", "for those who", "keep walking"],
    ["Silence too", "has an edge", "hold it well"],
    ["Every promise", "is a weight", "I carry home"],
  ],
  versePlaceholder: true,
  projectsPlaceholder: true,
  aboutPlaceholder: true,
  technologiesPlaceholder: true,
  // Group the tools you actually use; keep each group to a handful of names.
  technologies: [
    { label: "Languages", items: ["Language one", "Language two", "Language three"] },
    { label: "Frontend", items: ["Framework one", "Framework two", "Library three", "Tool four"] },
    { label: "Backend and data", items: ["Runtime one", "Database two", "Service three"] },
    { label: "Tooling", items: ["Tool one", "Tool two", "Platform three", "Tool four"] },
  ],
  // Set to "/resume.pdf" once the file is in /public.
  resumeHref: null as string | null,
  // Set once a contact method is decided, e.g. "mailto:you@example.com".
  contactHref: null as string | null,
  about: {
    lead: "A few sentences on who you are, what you build, and what you care about in the work.",
    facts: [
      { label: "Based in", value: "City, Country" },
      { label: "Open to", value: "Full-time roles, select freelance" },
      { label: "Focus", value: "Your strongest area" },
    ],
  },
  projects: [
    {
      slug: "project-one",
      title: "Project title",
      verse: "One line that says why this work mattered",
      summary:
        "Two or three sentences: the problem, what you built, and the result. Keep it concrete, the kind of detail a hiring manager can ask you about.",
      role: "Your role",
      stack: ["Stack", "Tools", "Platform"],
      year: "Year",
      liveUrl: null,
      sourceUrl: null,
      caseStudyUrl: null,
    },
    {
      slug: "project-two",
      title: "Project title",
      verse: "One line that says why this work mattered",
      summary:
        "Two or three sentences: the problem, what you built, and the result. Keep it concrete, the kind of detail a hiring manager can ask you about.",
      role: "Your role",
      stack: ["Stack", "Tools"],
      year: "Year",
      liveUrl: null,
      sourceUrl: null,
      caseStudyUrl: null,
    },
    {
      slug: "project-three",
      title: "Project title",
      verse: "One line that says why this work mattered",
      summary:
        "Two or three sentences: the problem, what you built, and the result. Keep it concrete, the kind of detail a hiring manager can ask you about.",
      role: "Your role",
      stack: ["Stack", "Tools", "Platform"],
      year: "Year",
      liveUrl: null,
      sourceUrl: null,
      caseStudyUrl: null,
    },
  ] satisfies Project[],
  experience: [
    {
      id: "role-1",
      title: "Role title",
      org: "Company",
      period: "Start – End",
      summary: "One line on what you owned and the outcome.",
    },
    {
      id: "role-2",
      title: "Role title",
      org: "Company",
      period: "Start – End",
      summary: "One line on what you owned and the outcome.",
    },
    {
      id: "role-3",
      title: "Role title",
      org: "Company or school",
      period: "Start – End",
      summary: "One line on what you owned and the outcome.",
    },
  ] satisfies Role[],
};

export const destinations = [
  { n: "01", label: "Projects", href: "#work" },
  { n: "02", label: "Experience", href: "#path" },
  { n: "03", label: "About", href: "#about" },
] as const;
