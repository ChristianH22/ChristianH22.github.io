import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="text-col bio">
      <h1 className="page-title">About Me</h1>

      <p>
        I am named after my great grandpa, being of Greek descent we call this
        προπάππους. His name was Christ. I am told my character resembles his, I
        look to make him and my family proud.
      </p>

      <h2 className="bio-year">2003</h2>
      <p>
        I was born on April 2nd in Hummelstown, PA. Here I remember early
        memories with my parents, my first cat Sebastian (He was vicious),
        throwing the styrofoam airplane with my grandpa, and my second Christmas;
        I was gifted a John Deere tractor, and a children&apos;s Stanley
        workbench where I could build birdhouses.
      </p>

      <h2 className="bio-year">2006</h2>
      <p>
        My parents and I move to New Haven, Connecticut. Across the street from
        our house was a soccer field, and beyond was a wall of seagrass
        separating us from the Long Island Sound. Our house was a
        &ldquo;fixer-upper&rdquo;, I would beg my dad to help him paint, fix the
        outlets and lighting fixtures. Of course I was three years old, so none
        of this ended up happening.
      </p>
      <p>For my birthday, I am gifted my first Lego set.</p>

      <h2 className="bio-year">2007</h2>
      <p>My brother is born! He is my lifelong best friend.</p>
    </div>
  );
}
