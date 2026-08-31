import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="text-col bio">
      <h1 className="page-title">About Me</h1>

      <p>
        I am named after my great grandpa, Χρήστος (Christos). I am told my character resembles his, I
        look to make him and my family proud.

        My mission in my career and life is to discover knowledge to create a positive impact 
        on our world, through innovation, synonomously engineering.

        Below I document my journey to where
        I am today
      </p>

      <h2 className="bio-year">Timeline</h2>
      <h2 className="bio-year">2003</h2>
      <p>
        I was born on April 2nd in Hummelstown, PA. Here I remember early
        memories with my parents, my first cat Sebastian (He was vicious),
        throwing the styrofoam airplane with my grandpa, and my second Christmas;
        On of my gifts was a children&apos;s Stanley
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
      <p>For my birthday, I am gifted my first Lego set. This is a hobby I spend most of my time tending to, would have spent all of it if I was able to.</p>

      <h2 className="bio-year">2007</h2>
      <p>My brother Nick is born! He is my lifelong best friend.</p>

      <h2 className="bio-year">2008</h2>
      <p>I begin youth swimming lessons with Coach Jose in East Haven.</p>

      <h2 className="bio-year">2010</h2>
      <p>I watch Back to the Future 2, I become enfatuated with flying cars and robotics and the vision of what our future could hold.</p>

      <h2 className="bio-year">2011</h2>
      <p>After graduating from youth lessons, I make the Yale Junior swim team, Omni. This was a milestone event for me.
        I still remember winning first in my regionals event - Coach Jose came to watch 
      </p>

      <h2 className="bio-year">2014</h2>
      <p>I begin Cello lessons. Music becomes a big part of my life outside of work.</p>

      <h2 className="bio-year">2017</h2>
      <p>High School starts. I swim for the Varsity team, competing at the state competition.
      I am introduced to programming this year, a class typically meant for 3rd year students.
      I go on to take AP Computer Science.


      </p>

      <h2 className="bio-year">2020</h2>
      <p>COVID19. Didn't expect this happening - taught myself guitar, piano, and foundational machine learning algorithms using scikit-learn.
        I move to Raleigh, North Carolina
      </p>

      <h2 className="bio-year">2021</h2>
      <p>I graduate high school and start college at North Carolina State University, studying Electrical Engineering. From the beginning,
        I plan to specialize in Machine Learning & Signal Processing. Go Pack!</p>

    </div>
  );
}
