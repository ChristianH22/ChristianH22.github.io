import type { Metadata } from "next";
import { getPosts } from "@/lib/rss";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Still Learning. A running notebook of things I'm curious about: physics, math, technology, medicine, history, and whatever else pulls me in.",
};

// Rebuilt on each deploy (and on the scheduled CI cron) to pick up new posts.
export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="page-title">Still Learning.</h1>
      <p className="page-intro">
        A running notebook of things I&apos;m curious about: physics, math,
        technology, medicine, history, and whatever else pulls me in. No fixed
        schedule, no fixed topic. Just learning and framing arguments as I go.{" "}
        <a href={site.substack}>Subscribe on Substack</a>.
      </p>

      {posts.length === 0 ? (
        <p className="empty-note">Subscribe so you don&apos;t miss it.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.link} className="post-item">
              <div className="post-body">
                <h2 className="post-title">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>
                {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                <span className="post-date">{post.dateLabel}</span>
              </div>
              {post.image && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-thumb-link"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="post-thumb"
                    src={post.image}
                    alt=""
                    width={128}
                    height={128}
                    loading="lazy"
                  />
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
