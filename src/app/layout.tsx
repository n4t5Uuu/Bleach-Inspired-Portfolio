import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./fonts/fonts.css";
import "./globals.css";

const themeScript = `try{var d=document.documentElement.dataset,t=localStorage.getItem("theme");d.themeSource=t==="light"||t==="dark"?"user":"system";if(d.themeSource==="system")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";d.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

// A reload that the browser scrolls back past the gate is shown as passed from its first paint, before
// the gate script loads; otherwise the closed doors and the rolled-up about scroll flash for a moment.
// The browser restores the scroll without a timely scroll event, so it checks before each paint, and
// stops once the gate script has taken over (it sets data-gate).
const restoreScript = `(function(){var d=document.documentElement.dataset,n=0;function c(){var g=document.getElementById("gate");if(d.gate||n++>600)return;if(g&&scrollY>0&&scrollY>=g.offsetHeight-innerHeight&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.passed="true";d.beat="true";d.gate="open";d.restored="";return}requestAnimationFrame(c)}requestAnimationFrame(c)})()`;

const title = `${site.name} — ${site.role} Portfolio`;
const description = `Portfolio of ${site.name}, a 4th year Computer Science student at the University of Santo Tomas specializing in Data Science. Projects, experience, and resume.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website", siteName: `${site.name} — Portfolio`, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  // the token from Google Search Console's "HTML tag" method, set on the host (see README)
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // the theme script sets data-theme before hydration, so React must not compare it
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* pick the theme before first paint: the saved choice, else follow the system setting */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: restoreScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
