import type { Metadata } from "next";
import WritingList from "@/components/WritingList";
import { getPosts } from "@/lib/rss";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on technology, medicine & biotech, and physics, mirrored from Substack.",
};

// Rebuilt on each deploy (and on the scheduled CI cron) to pick up new posts.
export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="page-title">Writing</h1>
      <p className="page-intro">
        I write about technology, medicine &amp; biotech, and physics. Filter to
        your thread below. Everything links out to the full piece on{" "}
        <a href={site.substack}>Substack</a>.
      </p>

      <WritingList posts={posts} />
    </div>
  );
}
