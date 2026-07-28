"use client";

import { useState } from "react";
import type { Post } from "@/lib/rss";
import { CATEGORIES, type Category } from "@/lib/categories";

type Filter = "All" | Category;

export default function WritingList({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...CATEGORIES];
  const visible =
    filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <div>
      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty-note">
          {posts.length === 0
            ? "Posts will appear here once the feed is available."
            : "No posts in this category yet."}
        </p>
      ) : (
        <ul className="post-list">
          {visible.map((post) => (
            <li key={post.link} className="post-item">
              <div className="post-meta">
                <span>{post.dateLabel}</span>
                <span className="post-chip">{post.category}</span>
              </div>
              <h2 className="post-title">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h2>
              {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
