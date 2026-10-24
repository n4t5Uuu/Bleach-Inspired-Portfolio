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
  // Three short lines in your own voice. They open the gate.
  // Keep each line to about 14 characters so it stands in one column on the doors.
  verse: ["Your verse", "in three lines", "your own voice"],
  versePlaceholder: true,
  projectsPlaceholder: true,
  aboutPlaceholder: true,
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
      title: "Role title",
      org: "Company",
      period: "Start – End",
      summary: "One line on what you owned and the outcome.",
    },
    {
      title: "Role title",
      org: "Company",
      period: "Start – End",
      summary: "One line on what you owned and the outcome.",
    },
    {
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
