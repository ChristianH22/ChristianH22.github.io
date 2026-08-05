import Parser from "rss-parser";
import { site } from "./config";

export type Post = {
  title: string;
  link: string;
  date: string; // ISO
  dateLabel: string; // human-readable
  excerpt: string;
  image: string; // cover image URL (may be "")
};

function toExcerpt(input: string | undefined, max = 200): string {
  if (!input) return "";
  const text = input
    .replace(/<[^>]*>/g, " ") // strip HTML
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/**
 * Fetches and normalizes the Substack RSS feed at build time.
 * Returns posts newest-first. Never throws; an empty feed yields [].
 */
export async function getPosts(): Promise<Post[]> {
  const parser = new Parser();

  let feed;
  try {
    feed = await parser.parseURL(site.substackFeed);
  } catch (err) {
    console.warn(`[rss] Could not fetch ${site.substackFeed}:`, err);
    return [];
  }

  const posts: Post[] = (feed.items ?? []).map((item) => {
    const date = item.isoDate ?? item.pubDate ?? new Date().toISOString();

    return {
      title: item.title?.trim() ?? "Untitled",
      link: item.link ?? "",
      date,
      dateLabel: new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt: toExcerpt(item.contentSnippet ?? item.content ?? item.summary),
      image: item.enclosure?.url ?? "",
    };
  });

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
