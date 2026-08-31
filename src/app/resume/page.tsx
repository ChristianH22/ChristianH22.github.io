import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="resume">
      <p className="resume-note">Recommendations are available upon request.</p>

      <section>
        <h2>Summary</h2>
        <p>
          Engineer driven to innovate real-world solutions, combining technical
          expertise with business judgment.
        </p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> Python, C, MATLAB, Bash
        </p>
        <p>
          <strong>Machine Learning:</strong> PyTorch, TensorFlow, JAX,
          scikit-learn, OpenCV, LangChain, NumPy, pandas, Gradio
        </p>
        <p>
          <strong>Infrastructure &amp; Web:</strong> PySpark, Docker, AWS,
          Databricks, Snowflake, React, Next.js
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Deloitte US Consulting</strong> | Strategy Analyst
            </span>
            <span className="entry-meta">New York, NY | Sep 2025 – Present</span>
          </div>
          <ul>
            <li>
              Built the codebase and logic for a pricing transformation program
              for a Fortune 500 electrical distributor, generating $23M in client
              value through scalable pricing analytics and automation
            </li>
            <li>
              Designed the business case, technical architecture, $8.6M capital
              allocation request, and $70M savings projection for an AI-enabled
              pre-deal modeling and analytics platform for a pharmaceutical client
            </li>
            <li>
              Co-authored a research point-of-view on shifting patient volumes and
              ownership structures in ambulatory surgery centers, used to help win
              a $4M medtech client engagement; currently in review for external
              publication
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Irisight</strong> | Cofounder
            </span>
            <span className="entry-meta">Chicago, IL | Jan 2025 – Jan 2026</span>
          </div>
          <ul>
            <li>
              Deployed a computer vision platform for gait analysis and fall-risk
              assessment using smartphone video
            </li>
            <li>
              Led customer discovery with 30+ physical therapists, built and
              iterated MVP with 8 selected as design partners
            </li>
            <li>
              Selected as one of 9 startups from 100 applicants for Northwestern
              University&apos;s Incubator for early-stage ventures and awarded $10K
              in non-dilutive funding; program ranked #1 university incubator by
              Time (2026)
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Research</h2>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>KDD Laboratory University of Athens</strong> | Research
              Assistant
            </span>
            <span className="entry-meta">
              Athens, Greece | Mar 2025 – Sep 2025
            </span>
          </div>
          <ul>
            <li>
              Constructed ground-truth solutions for 55 tasks in a software
              engineering benchmark under an Agent-as-a-Judge evaluation
              framework, achieving 92.6% requirements satisfaction
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Wearable Sensing Laboratory</strong> | Research Assistant
            </span>
            <span className="entry-meta">Raleigh, NC | Aug 2023 – Sep 2025</span>
          </div>
          <ul>
            <li>
              Designed an embedded machine learning pipeline for deploying an
              8-class neural network to the MAX78000 AI MCU, optimizing student
              model inference performance and power consumption on-device by 13%
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Functional Data Laboratory</strong> | Research Assistant
            </span>
            <span className="entry-meta">Raleigh, NC | Aug 2023 – Jun 2025</span>
          </div>
          <ul>
            <li>
              Fine-tuned an open-source LLM and built a RAG pipeline to infer user
              age from social media text, achieving 90% precision across a dataset
              of 5M+ Twitter posts
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Technical Projects</h2>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Legal M&amp;A Due Diligence LLM and Data Room Classifier</strong>
            </span>
            <span className="entry-meta">July 2026 – Aug 2026</span>
          </div>
          <ul>
            <li>
              Built and demonstrated a due diligence prototype for a law firm that
              classified data-room documents against a deal checklist, reducing
              time spent on contract ingestion through surfacing missing or
              incomplete documentation
            </li>
            <li>
              Developed a prototype LLM RAG pipeline for automated contract
              ingestion, review and extraction, customized to the firm&apos;s
              internal processing workflows offering a competitive advantage
              against generic legal AI tools
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>Multi-Label Cardiac Arrhythmia Detection</strong>
            </span>
            <span className="entry-meta">Feb 2025 – Aug 2025</span>
          </div>
          <ul>
            <li>
              Developed a multi-label arrhythmia-classification pipeline for
              12-lead ECG signals using a novel GSNR-based training metric that
              reduced architecture search compute by 83.3% and achieving a 77%
              balanced accuracy
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="entry">
          <div className="entry-head">
            <span>
              <strong>North Carolina State University</strong> | Raleigh, NC
            </span>
            <span className="entry-meta">M.S. EE: May 2026</span>
          </div>
          <p>M.S. Electrical Engineering | GPA: 3.71/4.0 | May 2026</p>
          <p>
            B.S. Electrical Engineering, University Honors Program | GPA:
            3.75/4.0 | May 2025
          </p>
          <p>
            Specialization: Machine Learning, Pattern Recognition, and Signal
            Processing
          </p>
        </div>
      </section>
    </div>
  );
}
