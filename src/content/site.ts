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
  name: "Alden Olmedo",
  // Two letters for the seal on the gate.
  initials: "AO",
  role: "Software Developer",
  // One plain line a recruiter can read at a glance: what you build, for whom.
  tagline: "4th Year Computer Science student at the University of Santo Tomas, specializing in Data Science.",
  taglinePlaceholder: false,
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
  aboutPlaceholder: false,
  technologiesPlaceholder: false,
  // One line under the heading, then the tools you actually use, grouped.
  technologiesIntro: "The languages, frameworks and platforms I build with, across the front end, back end, cloud and AI.",
  technologies: [
    {
      label: "Frontend",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "SCSS", "HTML", "CSS"],
    },
    {
      label: "Backend",
      items: ["Python", "Java", "SQL", "Hono", "FastAPI", "PostgreSQL", "MySQL", "Supabase", "Pocketbase", "Drizzle ORM"],
    },
    {
      label: "DevOps and cloud",
      items: ["AWS", "AWS Lambda", "S3", "Google Cloud", "Vercel", "Docker"],
    },
    {
      label: "AI and machine learning",
      items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "spaCy", "XGBoost", "scikit-learn", "Jupyter"],
    },
    {
      label: "Developer tools",
      items: ["Git", "Claude Code", "Figma", "DBeaver", "Excel", "Google Workspace"],
    },
  ],
  // The PDF lives in /public; set to null to show "Coming soon" instead.
  resumeHref: "/Olmedo_Resume.pdf" as string | null,
  // GitHub username for the contributions graph (also needs GITHUB_TOKEN set, see Contributions.tsx).
  github: "n4t5Uuu",
  contributionsIntro: "Commits, pull requests and reviews from the past year, pulled from GitHub and updated daily.",
  // Set once a contact method is decided, e.g. "mailto:you@example.com".
  contactHref: null as string | null,
  about: {
    // Set to an image path in /public once there is a portrait; null shows a marked placeholder frame.
    portrait: "/portrait.webp" as string | null,
    // Large type: keep it to about 25 words. The body sits under it in smaller text.
    lead: "I build apps that solve real problems for people, and projects that are simply fun to make. Right now I'm going deeper into AI and data engineering.",
    body: "I enjoy coding, building and studying for their own sake, and I put in the hours to keep sharpening my skills.",
    facts: [
      { label: "Studying", value: "4th Year Computer Science, University of Santo Tomas" },
      { label: "Specialization", value: "Data Science" },
      { label: "Based in", value: "Quezon City" },
    ],
    // Stamped on its own under the facts: the line recruiters look for.
    openTo: "Software, Full-Stack, AI and Data Engineering",
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
      id: "aws-builders-ust",
      title: "External Vice President / Chief Relations Officer",
      org: "AWS Builders – UST",
      period: "Jun 2026 – Present",
      summary:
        "Lead the Marketing, External Affairs and Sponsorships committees; secured 10 yearlong partners, including AWS-HERON and AWS-Adamson.",
    },
    {
      id: "ust-technovation",
      title: "Executive Assistant to the Chief Relations Officer",
      org: "UST Technovation Society",
      period: "Nov 2025 – Present",
      summary:
        "Built the society's first sponsorship and partnership database, organizing 1,000+ company and contact records, and pitched to prospective sponsors.",
    },
    {
      id: "tomasinoweb",
      title: "Frontend Developer",
      org: "TomasinoWeb",
      period: "Aug 2025 – Present",
      summary:
        "Built the homepage and loading screen of join.tomasinoweb.org from Figma designs in Next.js, React, TypeScript and SCSS, responsive and accessible (Lighthouse accessibility 87 mobile, 91 desktop).",
    },
    {
      id: "wyvern-innovations",
      title: "Business Development Intern",
      org: "Wyvern Innovations",
      period: "Jul 2025 – Sept 2025",
      summary: "Ran QA test cases on customer applications nearing deployment, reporting defects ahead of the production deadline.",
    },
    {
      id: "cics-student-council",
      title: "Executive Associate to the External Vice President",
      org: "CICS Student Council, UST",
      period: "Sept 2024 – Jun 2026",
      summary:
        "Raised ₱35,000 from 2 major sponsors for the freshman orientation and secured 15 College Week booth sponsors, plus speakers and mentors from IBM and GCash.",
    },
  ] satisfies Role[],
};

export const destinations = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Projects", href: "#work" },
  { n: "03", label: "Experience", href: "#path" },
] as const;
