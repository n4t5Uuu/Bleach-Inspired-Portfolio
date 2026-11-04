import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// One page: the sections are anchors on it, which search engines don't list separately.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
