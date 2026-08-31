import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="text-col">
      <h1 className="page-title">About Me</h1>
    </div>
  );
}
