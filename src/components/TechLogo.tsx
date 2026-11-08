import {
  siClaude,
  siCss,
  siCursor,
  siDbeaver,
  siDocker,
  siDrizzle,
  siFastapi,
  siFigma,
  siGit,
  siGithubactions,
  siGoogle,
  siGooglecloud,
  siHono,
  siHtml5,
  siHuggingface,
  siJavascript,
  siJupyter,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPocketbase,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siSass,
  siScikitlearn,
  siSpacy,
  siSupabase,
  siTailwindcss,
  siTanstack,
  siTensorflow,
  siTypescript,
  siVercel,
} from "simple-icons";

// Each tool's mark, keyed by its name in site.ts: the brand's own from simple-icons (filled, 24x24).
const brands: Record<string, string> = {
  JavaScript: siJavascript.path,
  TypeScript: siTypescript.path,
  React: siReact.path,
  "Next.js": siNextdotjs.path,
  "Tailwind CSS": siTailwindcss.path,
  "TanStack Query": siTanstack.path,
  SCSS: siSass.path,
  HTML: siHtml5.path,
  CSS: siCss.path,
  Python: siPython.path,
  Java: siOpenjdk.path,
  Hono: siHono.path,
  FastAPI: siFastapi.path,
  PostgreSQL: siPostgresql.path,
  MySQL: siMysql.path,
  Redis: siRedis.path,
  Supabase: siSupabase.path,
  Pocketbase: siPocketbase.path,
  "Drizzle ORM": siDrizzle.path,
  "Google Cloud": siGooglecloud.path,
  Vercel: siVercel.path,
  Docker: siDocker.path,
  "GitHub Actions": siGithubactions.path,
  PyTorch: siPytorch.path,
  TensorFlow: siTensorflow.path,
  "Hugging Face Transformers": siHuggingface.path,
  spaCy: siSpacy.path,
  "scikit-learn": siScikitlearn.path,
  Jupyter: siJupyter.path,
  Git: siGit.path,
  "Claude Code": siClaude.path,
  Cursor: siCursor.path,
  Figma: siFigma.path,
  DBeaver: siDbeaver.path,
  "Google Workspace": siGoogle.path,
};

// Tools with no published mark (SQL has none; AWS and OpenAI's Codex were withdrawn from simple-icons at
// the owners' request) get a plain original glyph, drawn in strokes.
const glyphs: Record<string, string> = {
  SQL: "M4 5.5c0-1.9 3.6-3 8-3s8 1.1 8 3-3.6 3-8 3-8-1.1-8-3Zm0 0v13c0 1.9 3.6 3 8 3s8-1.1 8-3v-13M4 12c0 1.9 3.6 3 8 3s8-1.1 8-3",
  AWS: "M7 19h10.5a4.5 4.5 0 0 0 .7-8.95A6 6 0 0 0 6.4 10.2 4.4 4.4 0 0 0 7 19Z",
  Codex: "M3.5 5h17v14h-17ZM8 10l3 2.5L8 15m5 0h4",
  XGBoost: "M12 3v5m0 0-6 5m6-5 6 5M6 13l-3 6m3-6 3 6m9-6-3 6m3-6 3 6",
};

export function TechLogo({ name }: { name: string }) {
  const brand = brands[name];
  const glyph = glyphs[name];
  if (!brand && !glyph) return null;
  return (
    <svg className="strip-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {brand ? <path d={brand} /> : <path d={glyph} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}
