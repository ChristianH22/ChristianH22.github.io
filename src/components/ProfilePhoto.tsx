"use client";

import { useState } from "react";

export default function ProfilePhoto({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="home-photo home-photo-fallback" aria-label={alt} role="img">
        {initials}
      </div>
    );
  }

  // Plain <img> (not next/image) since the site is a static export.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className="home-photo"
      src={src}
      alt={alt}
      width={165}
      height={220}
      onError={() => setFailed(true)}
    />
  );
}
