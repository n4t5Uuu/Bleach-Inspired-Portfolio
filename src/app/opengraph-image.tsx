import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// The card shown when the site is shared or listed: lacquer, washi type and the one vermilion cord.
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0b0b0c",
          borderTop: "16px solid #1c1c1e",
          color: "#f3f3ef",
          padding: "80px 96px",
        }}
      >
        <div style={{ display: "flex", width: 10, background: "#d2381e", marginRight: 64 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#ff6a4d" }}>
            {site.role}
          </div>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1.05, marginTop: 20 }}>{site.name}</div>
          <div style={{ fontSize: 34, lineHeight: 1.4, marginTop: 32, color: "#c9c9c3", maxWidth: 880 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 26, marginTop: 48, color: "#8a8a85" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
