import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, Shippori_Mincho_B1, Zen_Kaku_Gothic_New } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Dela_Gothic_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const verse = Shippori_Mincho_B1({
  variable: "--font-verse",
  weight: ["500", "800"],
  subsets: ["latin"],
});

const ui = Zen_Kaku_Gothic_New({
  variable: "--font-ui",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const themeScript = `try{var d=document.documentElement.dataset,t=localStorage.getItem("theme");d.themeSource=t==="light"||t==="dark"?"user":"system";if(d.themeSource==="system")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";d.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

// A reload that the browser scrolls back past the gate is shown as passed from its first paint, before
// the gate script loads; otherwise the closed doors and the rolled-up about scroll flash for a moment.
// The browser restores the scroll without a timely scroll event, so it checks before each paint, and
// stops once the gate script has taken over (it sets data-gate).
const restoreScript = `(function(){var d=document.documentElement.dataset,n=0;function c(){var g=document.getElementById("gate");if(d.gate||n++>600)return;if(g&&scrollY>0&&scrollY>=g.offsetHeight-innerHeight&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.passed="true";d.beat="true";d.gate="open";d.restored="";return}requestAnimationFrame(c)}requestAnimationFrame(c)})()`;

export const metadata: Metadata = {
  title: `${site.name}, ${site.role}`,
  description: `Projects, experience, and resume of ${site.name}, ${site.role.toLowerCase()}.`,
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // the theme script sets data-theme before hydration, so React must not compare it
    <html lang="en" className={`${display.variable} ${verse.variable} ${ui.variable}`} suppressHydrationWarning>
      <head>
        {/* pick the theme before first paint: the saved choice, else follow the system setting */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: restoreScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
