export type Category = "Tech" | "Medicine & Biotech" | "Physics";

export const CATEGORIES: Category[] = ["Tech", "Medicine & Biotech", "Physics"];

// Keywords used to infer a bucket from a post's Substack <category> tags.
// First match wins, in this priority order.
const KEYWORD_MAP: [Category, string[]][] = [
  [
    "Medicine & Biotech",
    [
      "medicine",
      "medical",
      "medtech",
      "biotech",
      "biolog",
      "health",
      "healthcare",
      "clinical",
      "disease",
      "pharma",
      "drug",
      "genom",
      "gene",
      "dna",
      "rna",
      "crispr",
      "cas9",
      "protein",
      "alphafold",
      "cell",
      "neuro",
      "cancer",
      "vaccine",
    ],
  ],
  [
    "Physics",
    [
      "physics",
      "quantum",
      "relativity",
      "particle",
      "energy",
      "thermodynamic",
      "semiconductor",
      "material",
      "optics",
      "photonics",
      "astro",
      "cosmo",
    ],
  ],
  [
    "Tech",
    [
      "tech",
      "ml",
      "ai",
      "machine learning",
      "software",
      "hardware",
      "engineering",
      "startup",
      "business",
      "data",
    ],
  ],
];

// Manual overrides for posts whose Substack tags are missing or ambiguous.
// Key = post slug (last path segment of the Substack URL). Value = category.
// Example: "my-post-slug": "Physics",
export const SLUG_OVERRIDES: Record<string, Category> = {};

export function categorize(
  slug: string,
  tags: string[],
  text = "",
): Category {
  if (SLUG_OVERRIDES[slug]) return SLUG_OVERRIDES[slug];

  const haystack = [...tags, text].join(" ").toLowerCase();
  for (const [category, keywords] of KEYWORD_MAP) {
    if (keywords.some((k) => haystack.includes(k))) return category;
  }
  return "Tech"; // sensible default
}
