import ProfilePhoto from "@/components/ProfilePhoto";
import { site } from "@/lib/config";

export default function Home() {
  return (
    <div>
      <div className="home-header">
        <ProfilePhoto src="/headshot_2.jpeg" alt="" initials="CH" />
        <div className="home-heading">
          <h1 className="hero-name">Christian Hoimes</h1>
          <p className="hero-claim">{site.tagline}</p>
        </div>
      </div>

      <div className="bio">
        <p> Thanks for visiting. I’m Christian, and I 
          created this page to share my work, writing, 
          and the things I learn along the way. </p>

        <p> I hold a B.S. and M.S. in Electrical Engineering 
          from North Carolina State University. My background 
          is in machine learning research, startups, and 
          strategy consulting. While those experiences may 
          seem different, they are all connected by the same 
          interest: understanding complex systems and building 
          products that make them more useful. </p>

        <p> What you may not find on my resume is that I am deeply 
          curious. I enjoy learning how things work, whether that 
          means studying the physics behind a technology, thinking 
          through how a healthcare product reaches patients, or 
          exploring why a business operates the way it does. I tend 
          to move between the technical and strategic sides of a problem 
          because I believe the best ideas require an understanding of 
          both. </p>

        <p> I am a builder at heart. Sometimes that means writing code 
          or developing a product. Other times, it means creating a model, 
          shaping a strategy, or simply organizing an idea well enough that 
          someone can act on it. I care about doing work that is practical, 
          thoughtful, and grounded in real issues. </p>

        <p> This page is a collection of that work and curiosity. I’ll use it to 
          document what I build, write about medtech, technology, business, and physics, 
          and share what I learn as I continue figuring out where those interests lead. </p>

        <a className="resume-link" href="/resume.pdf">
          ↓ Resume (PDF)
        </a>
      </div>
    </div>
  );
}
