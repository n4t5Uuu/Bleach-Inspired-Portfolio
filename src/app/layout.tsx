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

const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

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
        {/* pick the theme before first paint: the saved choice, else the system setting */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
