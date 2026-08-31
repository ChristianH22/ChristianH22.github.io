import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import { site } from "@/lib/config";

export default function Home() {
  return (
    <div className="hub">
      <ProfilePhoto src="/headshot_2.jpeg" alt="Christian Hoimes" initials="CH" />

      <h1 className="hub-title">Welcome to my website</h1>

      <ul className="hub-links">
        <li>
          Click <Link href="/about">here</Link> to learn more about me.
        </li>
        <li>
          Check out my resume <Link href="/resume">here</Link>.
        </li>
        <li>
          See my projects <Link href="/projects">here</Link>.
        </li>
        <li>
          Read my writing{" "}
          <a href={site.substack} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </li>
      </ul>
    </div>
  );
}
