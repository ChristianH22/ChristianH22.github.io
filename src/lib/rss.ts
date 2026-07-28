import Parser from "rss-parser";
import { site } from "./config";
import { categorize, type Category } from "./categories";

export type Post = {
  title: string;
  link: string;
  slug: string;
  date: string; // ISO
  dateLabel: string; // human-readable
  excerpt: string;
  category: Category;
};

function slugFromLink(link: string): string {
  try {
    const parts = new URL(link).pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? link;
  } catch {
    return link;
  }
}

function toExcerpt(input: string | undefined, max = 220): string {
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
  const parser = new Parser({
    customFields: { item: [["category", "categories", { keepArray: true }]] },
  });

  let feed;
  try {
    feed = await parser.parseURL(site.substackFeed);
  } catch (err) {
    console.warn(`[rss] Could not fetch ${site.substackFeed}:`, err);
    return [];
  }

  const posts: Post[] = (feed.items ?? []).map((item) => {
    const link = item.link ?? "";
    const slug = slugFromLink(link);
    const rawTags = (item as { categories?: string[] }).categories ?? [];
    const tags = Array.isArray(rawTags) ? rawTags : [rawTags].filter(Boolean);
    const date = item.isoDate ?? item.pubDate ?? new Date().toISOString();

    return {
      title: item.title?.trim() ?? "Untitled",
      link,
      slug,
      date,
      dateLabel: new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt: toExcerpt(item.contentSnippet ?? item.content ?? item.summary),
      category: categorize(
        slug,
        tags,
        `${item.title ?? ""} ${item.contentSnippet ?? ""}`,
      ),
    };
  });

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
