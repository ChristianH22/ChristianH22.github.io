import type { Metadata } from "next";
import { getRepos } from "@/lib/github";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Projects",
  description: "Code I have built, pulled from GitHub.",
};

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <p className="page-intro">
        Things I have built, pulled from my{" "}
        <a href={site.github}>GitHub</a>.
      </p>

      {repos.length === 0 ? (
        <p className="empty-note">Projects will appear here from GitHub.</p>
      ) : (
        <ul className="repo-list">
          {repos.map((r) => (
            <li key={r.url} className="repo">
              <h3 className="repo-name">
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.name}
                </a>
              </h3>
              {r.description && <p className="repo-desc">{r.description}</p>}
              <div className="repo-meta">
                {r.language && <span>{r.language}</span>}
                {r.stars > 0 && <span>★ {r.stars}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
