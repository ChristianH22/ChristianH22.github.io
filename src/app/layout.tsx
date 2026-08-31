import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { site } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="site-main">
          <div className="container">{children}</div>
        </main>
        <footer className="footer">
          <div className="container footer-inner">
            <span>
              <a href={site.substack} target="_blank" rel="noopener noreferrer">
                Substack
              </a>{" "}
              ·{" "}
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{" "}
              ·{" "}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              · <a href={`mailto:${site.email}`}>Email</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
