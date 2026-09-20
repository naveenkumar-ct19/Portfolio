import "./orionCloudMax.css";

import laptopFrame from "../imports/Desktop7-6/60457c0b6de2bb294532e614d560d3012eb5821d.png";
import { OverviewPage } from "../imports/Desktop7-6/index";

const processSteps = ["Alert", "Alert Information", "Root Cause", "Triage Journey", "Evaluation"];

const layerSteps = [
  ["Alert Information", "What happened?"],
  ["Root Cause", "Why did it happen?"],
  ["Triage Journey", "How did the AI investigate?"],
  ["Evaluation", "How well did it perform?"],
];

type StoryProps = {
  number: string;
  title: string;
  challenge: React.ReactNode;
  decision: React.ReactNode;
  reason: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  className?: string;
};

type FlowItem = string | [string, string];

function Flow({ items, className = "" }: { items: FlowItem[]; className?: string }) {
  return (
    <div className={`case-flow ${className}`}>
      {items.map((item, index) => {
        const [label, detail] = Array.isArray(item) ? item : [item, undefined];

        return (
        <span className="case-flow-item" key={label}>
          <span className={`case-chip ${detail ? "case-chip-detailed" : ""}`}>
            {detail ? <strong>{label}</strong> : label}
            {detail && <small>{detail}</small>}
          </span>
          {index < items.length - 1 && <span className="case-arrow">→</span>}
        </span>
        );
      })}
    </div>
  );
}

function CaseNav() {
  return (
    <nav className="case-nav" aria-label="Case study navigation">
      <a href="/">Home</a>
      <a href="/#projects" className="is-active">Projects</a>
      <a href="/#about">About me</a>
      <a href="/#resume">Resume</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
}

function CaseMeta() {
  return (
    <div className="case-meta">
      <div><span>ROLE</span><strong>UX/UI Designer</strong></div>
      <div><span>PRODUCT</span><strong>ORION CLOUDMAX</strong></div>
      <div><span>TEAM</span><strong>1 UX/UI Designer</strong></div>
    </div>
  );
}

function Story({ number, title, challenge, decision, reason, image, imageAlt, children, className = "" }: StoryProps) {
  return (
    <section className={`case-story ${className}`}>
      <div className="story-copy">
        <span className="story-label">DECISION STORY {number}</span>
        <h2>{title}</h2>
        <div className="story-block">
          <h3>The challenge</h3>
          <p>
            {number === "2" ? (
              <>
                An AI-generated root cause can feel like a black box.<br />
                Simply displaying:<br />
                &ldquo;Root cause: X&rdquo;<br />
                doesn&apos;t give an SRE enough confidence.
              </>
            ) : challenge}
          </p>
        </div>
        <div className="story-block">
          <h3>The decision</h3>
          <p>{decision}</p>
          {children}
        </div>
        {number === "1" && (
          <div className="story-block story-reason">
            <h3>Why this worked</h3>
            <p>{reason}</p>
            <p>Show your four screens here.</p>
          </div>
        )}
      </div>
      <figure className="story-screen">
        <img src={image} alt={imageAlt} />
      </figure>
    </section>
  );
}

export default function OrionCloudMaxPage() {
  return (
    <main className="case-page">
      <CaseNav />

      <section className="case-hero" id="about">
        <span className="case-tag">B2B&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;&nbsp;•&nbsp;&nbsp;SAAS</span>
        <h1>Designing an AI-powered SRE experience for faster, more transparent alert investigation</h1>
        <p>Orion CloudMax helps SRE teams triage production alerts using automated runbooks and AI-driven analysis across logs, metrics, and traces.</p>
        <div className="hero-laptop">
          <div className="hero-overview">
            <OverviewPage className="hero-overview-page" />
          </div>
          <img src={laptopFrame} alt="Laptop frame" className="hero-laptop-frame" />
        </div>
      </section>

      <CaseMeta />

      <section className="case-confidentiality" aria-label="Confidentiality notice">
        <h2>Confidentiality Notice</h2>
        <p>
          To respect confidentiality agreements, certain visuals have been blurred or omitted. If you&apos;d like to learn more, I&apos;d be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.
        </p>
      </section>

      <section className="case-main" id="projects">
        <div className="case-section-intro">
          <span className="section-label section-label-strong">THE CHALLENGE</span>
          <h2>SRE investigation is complex</h2>
          <p>When an alert is triggered, SREs need to understand:</p>
          <ul>
            <li>What happened?</li>
            <li>What caused it?</li>
            <li>What did the AI investigate?</li>
            <li>Can the result be trusted?</li>
          </ul>
          <p>The challenge was to make a technically complex, AI-driven investigation easy to scan without hiding the depth needed by technical users.</p>
        </div>

        <div className="case-section-block">
          <span className="section-label section-label-strong">THE EXPERIENCE</span>
          <h2>From alert to root cause</h2>
          <Flow items={processSteps} />
          <p>I designed the investigation experience to help SREs move from identifying an alert to understanding its root cause, following the AI&apos;s investigation, and evaluating the quality of its response.</p>
        </div>

        <Story
          number="1"
          title="How do you make AI investigation understandable?"
          challenge="A single alert can contain alert metadata, logs, metrics, traces, findings and AI-generated conclusions. Putting everything onto one page would create information overload."
          decision="I separated the investigation into four progressive layers:"
          reason="Users can start with a high-level understanding and progressively move into deeper technical information only when needed."
          image="/orion-story-1.png"
          imageAlt="Orion CloudMax Story 1 investigation screen"
          className="case-story-first"
        >
          <Flow items={layerSteps} className="layer-flow" />
        </Story>

        <Story
          number="2"
          title="How do you make AI reasoning trustworthy?"
          challenge="An AI-generated root cause can feel like a black box. Simply displaying “Root cause: X” doesn&apos;t give an SRE enough confidence."
          decision="I designed the Root Cause experience around the evidence collected during the investigation:"
          reason="The final conclusion is connected to the facts, metrics, logs, findings and conclusion that produced it."
          image="/orion-root-cause.png"
          imageAlt="Orion CloudMax root cause investigation screen"
        >
          <Flow items={["Facts collected", "Metrics", "Logs", "Findings", "Conclusion"]} className="layer-flow" />
          <p className="story-conclusion">
            The final root-cause conclusion is therefore connected to the investigation context instead of appearing as an isolated AI answer.
          </p>
        </Story>

        <Story
          number="3"
          title="How do you show what the AI actually did?"
          challenge="Knowing the final answer isn&apos;t always enough. SREs need visibility into the agent&apos;s investigation process."
          decision={
            <>
              I introduced a Triage Journey as a chronological timeline.<br />
              Each step represents an action performed during the investigation.<br />
              Users can go deeper through:
            </>
          }
          reason="The timeline turns an invisible AI process into something users can inspect, follow and trust."
          image="/orion-triage-journey.png"
          imageAlt="Orion CloudMax triage journey screen"
        >
          <Flow items={["View Tool Execution Details", "Arguments", "Response"]} className="layer-flow" />
          <p className="story-followup">This allows the SRE to understand:</p>
          <Flow items={["What the agent did", "What it received", "What it discovered"]} className="layer-flow" />
        </Story>

        <section className="case-story evaluation-story">
          <div className="story-copy">
            <span className="story-label">Decision Story 4</span>
            <h2>How do you measure whether the AI actually performed well?</h2>
            <div className="story-block">
              <h3>The challenge</h3>
              <p>A successful-looking investigation doesn&apos;t necessarily mean the AI performed correctly.</p>
            </div>
            <div className="story-block">
              <h3>The decision</h3>
              <p>I designed an Evaluation layer with an overall score and detailed score breakdown.</p>
              <p>The evaluation considers:</p>
              <ul>
                <li>Root Cause Similarity</li>
                <li>Agent Utilization</li>
                <li>Task Completion</li>
                <li>Tool Utilization</li>
                <li>Sub-agent Task Completion</li>
              </ul>
              <p>This turns AI performance into something users can inspect and evaluate, rather than simply trust.</p>
            </div>
          </div>
          <figure className="story-screen">
            <img src="/orion-sign-in.png" alt="Orion CloudMax evaluation screen" />
          </figure>
        </section>

        <section className="case-support">
          <span className="section-label">The Supporting Experience</span>
          <h2>Supporting the investigation ecosystem</h2>
          {[
            ["Overview", "Monitor alerts, LLM activity, latency and triage performance."],
            ["Alerts", "Search, filter and investigate alerts."],
            ["Runbooks", "Manage the knowledge used for automated triage."],
            ["Setup", "Configure agents, models, triage rules and observability integrations."],
            ["Users", "Manage access and user information."],
          ].map(([title, copy]) => (
            <div className="support-row" key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </section>

        <section className="case-outcome">
          <span className="section-label">Outcome</span>
          <h2>Making AI investigation easier to understand</h2>
          <p><strong>The final experience connects:</strong></p>
          <Flow items={["Alert", "Evidence", "Root Cause", "AI Actions", "Evaluation"]} />
          <p>It gives SREs both:</p>
          <div className="outcome-grid">
            <div><strong>Speed</strong><p>Quickly identify and understand alerts.</p></div>
            <div><strong>Depth</strong><p>Inspect the evidence and actions behind an AI-generated conclusion.</p></div>
            <div><strong>Transparency</strong><p>Understand how the AI reached its result.</p></div>
          </div>
        </section>

        <section className="case-reflection" id="resume">
          <span className="section-label">Reflection</span>
          <h2>What I learned</h2>
          <ul>
            <li>Designing Orion CloudMax taught me that AI UX isn&apos;t only about making AI powerful.</li>
            <li>It&apos;s about making its actions, evidence and decisions understandable to the people using it.</li>
          </ul>
        </section>
      </section>

    </main>
  );
}
