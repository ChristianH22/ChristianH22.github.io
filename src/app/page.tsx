import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import { site } from "@/lib/config";

export default function Home() {
  return (
    <div className="hub">
      <ProfilePhoto src="/headshot_2.jpeg" alt="Christian Hoimes" initials="CH" />

      <p className="hub-intro">
        Hi! My name is Christian Hoimes, welcome to my website! Click to{" "}
        <Link href="/about">learn more about me</Link>, see my resume &amp;
        experience <Link href="/resume">here</Link>, and my writing{" "}
        <a href={site.substack} target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </div>
  );
}
