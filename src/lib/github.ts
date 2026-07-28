export type Repo = {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
};

const USER = "ChristianH22";

// Repo names to hide from the Projects page (e.g. this website's own repo,
// experiments, config repos). Add names here as needed.
const EXCLUDE = new Set<string>([]);

// Fallback descriptions for repos that have none set on GitHub. Setting the
// description on GitHub itself is preferred (it syncs automatically and wins
// over anything here). Key = repo name.
const DESCRIPTIONS: Record<string, string> = {
  cardiac_arrhythmia_detection:
    "Deep learning pipeline that detects multiple cardiac arrhythmias from 12-lead ECG.",
};

/**
 * Fetches public repositories from GitHub at build time.
 * Returns non-fork, non-archived repos sorted by stars then recency.
 * Never throws; a failed request yields [].
 */
export async function getRepos(): Promise<Repo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "christianhoimes-site",
  };
  // Use the CI token when available to avoid unauthenticated rate limits.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  let data: unknown;
  try {
    const res = await fetch(
      `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`,
      { headers },
    );
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.warn("[github] Could not fetch repos:", err);
    return [];
  }

  if (!Array.isArray(data)) return [];

  type ApiRepo = {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    fork: boolean;
    archived: boolean;
    pushed_at: string;
    updated_at: string;
  };

  return (data as ApiRepo[])
    .filter((r) => !r.fork && !r.archived && !EXCLUDE.has(r.name))
    .map((r) => ({
      name: r.name,
      description: r.description ?? DESCRIPTIONS[r.name] ?? "",
      url: r.html_url,
      language: r.language,
      stars: r.stargazers_count ?? 0,
      updatedAt: r.pushed_at ?? r.updated_at,
    }))
    .sort(
      (a, b) =>
        b.stars - a.stars || +new Date(b.updatedAt) - +new Date(a.updatedAt),
    );
}
