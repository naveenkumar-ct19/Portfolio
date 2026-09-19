import "./jassxLoanReview.css";

import { JassxLoanReviewPreview } from "../imports/Desktop7-6/index";

function CaseNav() {
  return (
    <nav className="jassx-nav" aria-label="Case study navigation">
      <a href="/">Home</a>
      <a href="/#projects" className="is-active">Projects</a>
      <a href="/#about">About me</a>
      <a href="/#resume">Resume</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="jassx-label">{children}</span>;
}

function Flow({ items }: { items: string[] }) {
  return (
    <div className="jassx-flow">
      {items.map((item, index) => (
        <span className="jassx-flow-item" key={item}>
          <span className="jassx-chip">{item}</span>
          {index < items.length - 1 && <span className="jassx-arrow" aria-hidden="true">→</span>}
        </span>
      ))}
    </div>
  );
}

function ProcessCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="jassx-process-card">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
}

function ExperienceFlow() {
  return (
    <div className="jassx-process-flow">
      <div className="jassx-process-row">
        <ProcessCard title="Pipeline">Identify loans that need attention.</ProcessCard>
        <span className="jassx-process-arrow" aria-hidden="true">→</span>
        <ProcessCard title="Highlights">Understand overall loan readiness.</ProcessCard>
        <span className="jassx-process-arrow" aria-hidden="true">→</span>
        <ProcessCard title="Jazz Assessment">
          Review application<br />
          and financial<br />
          information.
        </ProcessCard>
        <span className="jassx-process-arrow" aria-hidden="true">→</span>
        <ProcessCard title="Evidence">Verify information through source documents and calculations.</ProcessCard>
        <span className="jassx-process-arrow" aria-hidden="true">→</span>
      </div>
      <div className="jassx-process-row jassx-process-row-secondary">
        <ProcessCard title="Decision">
          Approve, return to<br />
          processor, or decline.
        </ProcessCard>
        <span className="jassx-process-arrow" aria-hidden="true">→</span>
        <ProcessCard title="Conditions">
          Identify and resolve<br />
          outstanding issues.
        </ProcessCard>
      </div>
    </div>
  );
}

function DecisionStory({
  label,
  title,
  previewSrc,
  previewVariant,
  children,
}: {
  label: string;
  title: string;
  previewSrc?: string;
  previewVariant?: "tall" | "story3" | "story4" | "story5";
  children: React.ReactNode;
}) {
  const previewClassName = [
    "jassx-story-preview",
    previewSrc && "jassx-story-preview-image",
    previewVariant === "tall" && "jassx-story-preview-tall",
    previewVariant === "story3" && "jassx-story-preview-story3",
    previewVariant === "story4" && "jassx-story-preview-story4",
    previewVariant === "story5" && "jassx-story-preview-story5",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="jassx-story-section">
      <Label>{label}</Label>
      <div className="jassx-story-layout">
        <div className={previewClassName} aria-label={`${title} product preview`}>
          {previewSrc ? <img src={previewSrc} alt="" /> : <JassxLoanReviewPreview />}
        </div>
        <div className="jassx-story-copy">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function DetailSection({
  label,
  title,
  children,
  preview = true,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  preview?: boolean;
}) {
  return (
    <section className="jassx-detail-section">
      <Label>{label}</Label>
      <div className="jassx-detail-layout">
        {preview && (
          <div className="jassx-detail-preview" aria-label={`${title} product preview`}>
            <JassxLoanReviewPreview />
          </div>
        )}
        <div className="jassx-detail-copy">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function JassxLoanReviewPage() {
  return (
    <main className="jassx-page">
      <CaseNav />

      <section className="jassx-hero" id="about">
        <span className="jassx-tag">B2B&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;&nbsp;•&nbsp;&nbsp;FINTECH</span>
        <h1>Designing a clearer AI-assisted workflow for loan officers to review and approve loans</h1>
        <p>
          JASSX is an AI-assisted loan review platform that helps loan officers understand loan readiness, verify financial evidence, resolve conditions, and confidently move toward pre-approval.
        </p>
        <div className="jassx-hero-laptop">
          <JassxLoanReviewPreview />
        </div>
      </section>

      <div className="jassx-meta">
        <div><span>ROLE</span><strong>UX/UI Designer</strong></div>
        <div><span>PRODUCT</span><strong>JazzX</strong></div>
        <div><span>TEAM</span><strong>1 UX/UI Designer, 1 UX/UI Manager</strong></div>
      </div>

      <section className="jassx-confidentiality">
        <h2>Confidentiality Notice</h2>
        <p>
          To respect confidentiality agreements, certain visuals have been blurred or omitted. If you&apos;d like to learn more, I&apos;d be happy to walk you through the original screens, design decisions, and outcomes during a 1:1 conversation.
        </p>
      </section>

      <section className="jassx-main" id="projects">
        <section className="jassx-intro">
          <Label>THE CHALLENGE</Label>
          <h2>Loan review involved too much information across too many places</h2>
          <p>
            Loan officers need to review application, credit, income, assets, liabilities, property, documents, and calculations before making a decision.
          </p>
          <div className="jassx-goal">
            <strong>The Goal:</strong>
            <p>To make this complex process easier to scan, verify, and act on without hiding important information.</p>
          </div>
        </section>

        <section className="jassx-experience">
          <Label>THE EXPERIENCE</Label>
          <h2>From loan pipeline to confident decision</h2>
          <p>I designed a connected experience that guides loan officers through the complete review journey.</p>
          <ExperienceFlow />
        </section>

        <DecisionStory
          label="DECISION STORY 1"
          title="Helping loan officers prioritize the right loans"
          previewSrc="/jassx-home-list-view.png"
        >
          <p>
            <strong>The problem</strong><br />
            A long list of loans makes it difficult to immediately understand where attention is needed.
          </p>
          <p>
            <strong>The decision</strong><br />
            I structured the dashboard around pipeline stages, key metrics, and review queues.
          </p>
          <p>
            <strong>The result</strong><br />
            Loan officers can quickly move from<br />
            <strong>pipeline → priority loan → detailed review.</strong>
          </p>
        </DecisionStory>

        <DecisionStory
          label="DECISION STORY 2"
          title="Making AI recommendations explainable"
          previewSrc="/jassx-updated-dashboard-green-loan.png"
          previewVariant="tall"
        >
          <p>
            <strong>The problem</strong><br />
            AI recommendations need supporting context before a loan officer can confidently act on them.
          </p>
          <p>
            <strong>The decision</strong><br />
            I connected Jazz&apos;s assessment with the underlying loan information and evidence.
          </p>
          <p>
            <strong>The result</strong><br />
            The experience allows users to move from<br />
            <strong>recommendation → evidence → verification → action.</strong>
          </p>
        </DecisionStory>

        <DecisionStory
          label="DECISION STORY 3"
          title="Managing information density with progressive disclosure"
          previewSrc="/jassx-income-dashboard.png"
          previewVariant="story3"
        >
          <p>
            <strong>The problem</strong><br />
            Loan assessment contains a large amount of financial information.
          </p>
          <p>
            <strong>The decision</strong><br />
            I used summary → section → details → calculation instead of showing everything at once.
          </p>
          <p>
            <strong>The result</strong><br />
            Users can quickly scan the important information and expand sections when deeper review is needed.
          </p>
        </DecisionStory>

        <DecisionStory
          label="DECISION STORY 4"
          title="Connecting financial information to its evidence"
          previewSrc="/jassx-evidence-dashboard.png"
          previewVariant="story4"
        >
          <p>
            <strong>The problem</strong><br />
            Important financial information needs to be verified against supporting documents.
          </p>
          <p>
            <strong>The decision</strong><br />
            I introduced direct access to source documents and calculations within the review experience.
          </p>
          <p>
            <strong>The result</strong><br />
            Users can trace information back to its source without leaving the loan review workflow.
          </p>
        </DecisionStory>

        <DecisionStory
          label="DECISION STORY 5"
          title="Turning issues into actionable conditions"
          previewSrc="/jassx-condition-workflow.png"
          previewVariant="story5"
        >
          <p>
            <strong>The problem</strong><br />
            Identifying an issue is not enough; loan officers need a clear way to resolve it.
          </p>
          <p>
            <strong>The decision</strong><br />
            I designed a condition workflow:<br />
            <strong>Identify → Review → Add Condition → Resolve → Reassess</strong>
          </p>
          <p>
            <strong>The result</strong><br />
            The loan officer can clearly see what needs attention and what has been cleared.
          </p>
        </DecisionStory>

        <section className="jassx-wide-section">
          <Label>KEY DESIGN PRINCIPLES</Label>
          <div className="jassx-principles-list">
            <div>
              <strong>Make complexity scannable</strong>
              <span>Surface the most important information first.</span>
            </div>
            <div>
              <strong>Keep AI transparent</strong>
              <span>Connect recommendations to evidence and supporting information.</span>
            </div>
            <div>
              <strong>Reveal detail progressively</strong>
              <span>Allow users to dive deeper only when needed.</span>
            </div>
            <div>
              <strong>Keep actions close to information</strong>
              <span>Make it easy to review, resolve, and make decisions without losing context.</span>
            </div>
          </div>
        </section>

        <section className="jassx-outcome">
          <Label>OUTCOME</Label>
          <h2>A connected loan review experience</h2>
          <p>The final experience brings together:</p>
          <div className="jassx-outcome-grid">
            <div><strong>Prioritization</strong><p>Know which loans need attention.</p></div>
            <div><strong>Assessment</strong><p>Understand loan readiness.</p></div>
            <div><strong>Verification</strong><p>Review evidence and calculations.</p></div>
            <div><strong>Resolution</strong><p>Manage outstanding conditions.</p></div>
            <div><strong>Decision</strong><p>Move confidently toward approval.</p></div>
          </div>
        </section>

        <section className="jassx-reflection">
          <Label>REFLECTION</Label>
          <h2>Designing for complexity</h2>
          <p>
            This project reinforced that complex enterprise products do not necessarily need less information — they need better hierarchy and clearer relationships between information and actions.
          </p>
          <p>For JASSX, I focused on making the loan officer&apos;s decision journey scannable, explainable, and actionable.</p>
        </section>
      </section>
    </main>
  );
}
