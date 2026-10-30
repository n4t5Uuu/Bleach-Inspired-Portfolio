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
  placeholder?: boolean;
  // Screenshots in /public, 1200px wide; height is the file's own, 678 unless given.
  images?: { src: string; alt: string; height?: number }[];
  liveUrl: string | null;
  sourceUrl: string | null;
  // Any further links, shown after Source (e.g. an admin site).
  extraLinks?: { label: string; href: string }[];
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
  versePlaceholder: false,
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
      items: ["AWS", "Google Cloud", "Vercel", "Docker", "GitHub Actions"],
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
  // Set to null to show a pending note instead of the "Get in touch" button.
  contactHref: "mailto:olmedoalden4@gmail.com" as string | null,
  email: "olmedoalden4@gmail.com",
  // Shown under the closing buttons; each opens in a new tab.
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alden-olmedo-b85375295/" },
    { label: "Instagram", href: "https://www.instagram.com/xlmxdx_" },
    { label: "Facebook", href: "https://www.facebook.com/aldenxlmxdx/" },
  ],
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
      slug: "aws-builders-ust-recruitment",
      title: "AWS Builders – UST Recruitment Website",
      verse: "The door into AWS Builders – UST",
      summary:
        "The recruitment site for our AWS Builders organization at UST. I built the application flow and a personal dashboard that shows each applicant's result and issues a digital membership ID once they have paid, plus the payment verification dashboard for the finance team and Gmail API notifications to applicants' UST emails.",
      role: "Full-Stack Developer, one of 3 core developers on a 13-contributor team",
      stack: ["Next.js", "React", "TypeScript", "Hono", "PostgreSQL", "Drizzle ORM", "AWS Lambda", "S3", "Gmail API"],
      year: "2026",
      images: [
        { src: "/projects/aws-ust-dashboard.webp", height: 575, alt: "The platform's HR dashboard overview: a worklist of payments waiting for verification, the season schedule, and the applicant stages from applied to member, with the numbers blurred." },
        { src: "/projects/aws-ust-home.webp", alt: "The AWS Builders – UST home page: a cloud mascot under the heading \"What's in the Clouds?\" on a purple cloud background." },
      ],
      liveUrl: "https://www.aws-ust.org",
      sourceUrl: "https://github.com/ust-aws/aws-recruitment-2026",
      caseStudyUrl: null,
    },
    {
      slug: "hybrid-ai-text-detector",
      title: "Hybrid AI-Generated Text Detector",
      verse: "Who wrote it, a person or a model?",
      summary:
        "My undergraduate thesis: a detector that tells human writing from AI output. I built it end to end, from a ~300k-text corpus and cleaning pipeline to a late-fusion classifier that joins spaCy stylometric features with ELECTRA embeddings in XGBoost, reaching 90.6% accuracy and 0.970 ROC-AUC. I also traced near-perfect early scores to data leakage and fixed it, then shipped a FastAPI and Next.js app that scores text passage by passage.",
      role: "Lead engineer, 4-person thesis team",
      stack: ["Python", "PyTorch", "Hugging Face Transformers", "spaCy", "XGBoost", "scikit-learn", "FastAPI", "Next.js", "TypeScript", "Docker"],
      year: "2026",
      images: [
        { src: "/projects/hybrid-detector.webp", height: 574, alt: "The detector web app, \"Penned or Prompted?\": an academic text pasted on the left, and on the right a 2% AI-generation probability, a \"Likely Human-Written\" verdict, a score bar with the 0.55 threshold, and a per-passage breakdown." },
      ],
      liveUrl: null,
      sourceUrl: "https://github.com/n4t5Uuu/Hybrid-AI-Text-Detectors",
      caseStudyUrl: null,
    },
    {
      slug: "dollys-closet",
      title: "Dolly's Closet Inventory System",
      verse: "Every thrift find, accounted for",
      summary:
        "An inventory system for a thrift (ukay-ukay) business, replacing handwritten tracking with a web dashboard that has been in production use for nearly a year and manages 65 products. I led 8 developers in a Turborepo monorepo and reviewed every pull request, and built the OTP sign-in, notification emails and the controls to publish, hide or archive catalog items.",
      role: "Lead and full-stack developer, 8-person team",
      stack: ["Next.js", "React", "TypeScript", "Supabase", "Vercel", "Turborepo"],
      year: "2026",
      images: [
        { src: "/projects/dollys-closet-store.webp", height: 576, alt: "The Dolly's Closet storefront: a New Arrivals row of bags and clothing with prices and condition tags, above the searchable collection." },
        { src: "/projects/dollys-closet-admin.webp", height: 571, alt: "The Dolly's Closet admin site sign-in page: a centered log-in card with email and password fields on a soft pink background." },
      ],
      liveUrl: "https://www.dollysclosetph.com",
      sourceUrl: "https://github.com/n4t5Uuu/DollysCloset",
      extraLinks: [{ label: "Admin Site", href: "https://admin.dollysclosetph.com" }],
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

// "short" is the tab in the gate header and the bar, where room is tight; the Menu sheet uses "label".
export const destinations = [
  { n: "01", label: "About", short: "About", href: "#about" },
  { n: "02", label: "Projects", short: "Projects", href: "#work" },
  { n: "03", label: "Experience", short: "Experience", href: "#path" },
  { n: "04", label: "Technologies", short: "Stack", href: "#stack" },
  { n: "05", label: "Contributions", short: "GitHub", href: "#commits" },
  { n: "06", label: "Contact", short: "Contact", href: "#close" },
] as const;
