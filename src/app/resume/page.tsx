import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="text-col">
      <h1 className="page-title">Resume</h1>
    </div>
  );
}
