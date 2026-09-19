import "./blackBerryAtHoc.css";

import laptopFrame from "../imports/Desktop7-6/60457c0b6de2bb294532e614d560d3012eb5821d.png";
import { BlackberryAlertTemplateContent, BlackberryAlertTemplatePreview, BlackberryAudienceContent, BlackberryDeliveryContent, BlackberryFinalCheckContent, BlackberryOrganizationalScopeContent, BlackberryScheduleContent } from "../imports/Desktop7-6/index";

type FlowItem = string | [string, string];
type PreviewVariant = "alert" | "audience" | "organizations" | "delivery" | "schedule" | "review";

function Flow({ items, className = "" }: { items: FlowItem[]; className?: string }) {
  return (
    <div className={`athoc-flow ${className}`}>
      {items.map((item, index) => {
        const [label, detail] = Array.isArray(item) ? item : [item, undefined];
        return (
          <span className="athoc-flow-item" key={label}>
            <span className={`athoc-chip ${detail ? "athoc-chip-detailed" : ""}`}>
              {detail ? <strong>{label}</strong> : label}
              {detail && <small>{detail}</small>}
            </span>
            {index < items.length - 1 && <span className="athoc-arrow">→</span>}
          </span>
        );
      })}
    </div>
  );
}

function CaseNav() {
  return (
    <nav className="athoc-nav" aria-label="Case study navigation">
      <a href="/">Home</a>
      <a href="/#projects" className="is-active">Projects</a>
      <a href="/#about">About me</a>
      <a href="/#resume">Resume</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
}

function Label({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return <span className={`athoc-label ${strong ? "athoc-label-strong" : ""}`}>{children}</span>;
}

function AlertTemplateScreenContent() {
  const steps = ["Alert Template", "Target Users", "Target Organizations", "Mass Devices", "Schedule"];
  const fields = [
    ["Name", "Enter template name"],
    ["Description", "Enter template description"],
  ];

  return (
    <div className="athoc-alert-template-ui" aria-label="Alert template application screen">
      <div className="athoc-alert-template-topbar">
        <div className="athoc-alert-template-topbar-inner">
          <span className="athoc-alert-template-logo" aria-hidden="true"><span /></span>
          {['Alert', 'Account', 'Collaborate', 'Users', 'Organizations', 'Reports', 'Accounts'].map((item) => (
            <span className={`athoc-alert-template-nav ${item === "Alert" ? "is-active" : ""}`} key={item}>{item}</span>
          ))}
          <span className="athoc-alert-template-nav-spacer" />
        </div>
      </div>

      <div className="athoc-alert-template-workspace">
        <aside className="athoc-alert-template-stepper">
          {steps.map((step, index) => (
            <div className={`athoc-alert-step ${index === 0 ? "is-complete" : ""}`} key={step}>
              <span className="athoc-alert-step-number">{index === 0 ? "✓" : index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </aside>

        <section className="athoc-alert-template-main">
          <div className="athoc-alert-template-heading">
            <h3>Alert template</h3>
            <p>Complete the 5 steps below to create and configure a new alert template.</p>
          </div>

          <div className="athoc-alert-template-form">
            {fields.map(([label, placeholder]) => (
              <label className={`athoc-alert-field ${label === "Description" ? "is-description" : ""}`} key={label}>
                <span>{label} :</span>
                <span className="athoc-alert-input">{placeholder}</span>
              </label>
            ))}
            <label className="athoc-alert-field">
              <span>Folder :</span>
              <span className="athoc-alert-input athoc-alert-select">System Default <span>⌄</span></span>
            </label>
            <div className="athoc-alert-field athoc-alert-check-field">
              <span>Available for Quick Publish :</span>
              <span className="athoc-alert-check"><i />System Default</span>
            </div>
            <div className="athoc-alert-field athoc-alert-check-field">
              <span>Available for mobile publishing :</span>
              <span className="athoc-alert-check"><i className="is-selected" />Yes <em>(Make sure the alert template is ready to publish)</em></span>
            </div>
            <div className="athoc-alert-field athoc-alert-check-field">
              <span>Alert Approval :</span>
              <span className="athoc-alert-check"><i />Yes</span>
            </div>
          </div>

          <div className="athoc-alert-template-actions">
            <button type="button" className="athoc-alert-button">Cancel</button>
            <span />
            <button type="button" className="athoc-alert-button">← Back</button>
            <button type="button" className="athoc-alert-button is-primary">Next →</button>
          </div>
        </section>
      </div>
    </div>
  );
}

function AlertTemplateHeroPreview() {
  const users = ["akopr", "akSupOppr", "Aman", "andy", "apaljeia-sr", "Ashish", "gop.org.admin", "Geo_M", "Geor_M"];

  return (
    <div className="athoc-hero-alert-preview" aria-label="Alert template and target users preview">
      <BlackberryAlertTemplatePreview />
      <div className="athoc-hero-alert-app" aria-hidden="true">
        <div className="athoc-hero-alert-topbar">
          <span className="athoc-alert-template-logo"><span /></span>
          {['Alert', 'Account', 'Collaborate', 'Users', 'Organizations', 'Reports', 'Accounts'].map((item) => (
            <span className={`athoc-hero-alert-nav ${item === "Alert" ? "is-active" : ""}`} key={item}>{item}</span>
          ))}
        </div>
        <div className="athoc-hero-alert-workspace">
          <aside className="athoc-hero-alert-stepper">
            <div className="athoc-hero-alert-step is-complete"><b>✓</b><span>Alert Template</span></div>
            <div className="athoc-hero-alert-step is-current"><b>2</b><span>Target Users</span></div>
            <div className="athoc-hero-alert-step"><b>3</b><span>Target Organizations</span></div>
            <div className="athoc-hero-alert-step"><b>4</b><span>Mass Devices</span></div>
            <div className="athoc-hero-alert-step"><b>5</b><span>Schedule</span></div>
          </aside>
          <section className="athoc-hero-alert-main">
            <h3>Alert template</h3>
            <p className="athoc-hero-alert-subtitle">Complete the 5 steps below to create and configure a new alert template.</p>
            <div className="athoc-hero-alert-tabs"><span>By Group</span><strong>By User</strong><span>By Advanced Query</span></div>
            <div className="athoc-hero-alert-search">⌕ <span>Search</span></div>
            <div className="athoc-hero-alert-results">
              <div className="athoc-hero-alert-table-head"><span>□</span><span>USERNAME</span><span>DISPLAY NAME</span><span>SPONSOR</span><span>MOBILE APP</span><span>ACTIONS</span></div>
              {users.map((user, index) => (
                <div className={`athoc-hero-alert-row ${index === 2 || index === 3 ? "is-selected" : ""}`} key={user}>
                  <span>{index === 2 || index === 3 ? "☑" : "□"}</span><span>{user}</span><span>{user}</span><span>—</span><span>N/A</span><span>Block</span>
                </div>
              ))}
            </div>
            <div className="athoc-hero-alert-footer"><span>Items per page: 15</span><span>1–15 of 150　‹　›</span></div>
          </section>
          <aside className="athoc-hero-alert-summary">
            <strong>Targeting Summary</strong>
            <div className="athoc-hero-alert-donut"><b>02</b><span>Total Users</span></div>
            <span className="is-reachable">● Reachable user <b>01</b></span>
            <span className="is-unreachable">● Not Reachable user <b>01</b></span>
            <span>● By Groups <b>02</b></span>
            <span>● By Users <b>00</b></span>
            <span>● By Location <b>00</b></span>
            <span>● By Advanced Query <b>00</b></span>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Screen({ className = "", variant = "audience" }: { className?: string; variant?: PreviewVariant }) {
  const exactVariant = variant === "alert" || variant === "audience" || variant === "organizations" || variant === "delivery" || variant === "schedule" || variant === "review";
  return (
    <figure className={`athoc-screen athoc-screen-${variant} ${exactVariant ? "athoc-screen-exact" : ""} ${className}`}>
        {variant === "alert" ? <BlackberryAlertTemplateContent /> : variant === "audience" ? <BlackberryAudienceContent /> : variant === "organizations" ? <BlackberryOrganizationalScopeContent /> : variant === "delivery" ? <BlackberryDeliveryContent /> : variant === "schedule" ? <BlackberryScheduleContent /> : variant === "review" ? <BlackberryFinalCheckContent /> : <TargetUsersPreview variant={variant} standalone />}
    </figure>
  );
}

function TargetUsersPreview({ variant = "audience", standalone = false }: { variant?: PreviewVariant; standalone?: boolean }) {
  const previewData: Record<PreviewVariant, { activeIndex: number; heading: string; rows: string[]; summary: string; summaryItems: string[] }> = {
    alert: { activeIndex: 0, heading: "Alert template", rows: ["Name", "Description", "Folder", "Available for Quick Publish", "Available for mobile publishing", "Alert Approval"], summary: "Template Details", summaryItems: ["Complete", "Ready to publish", "Mobile enabled"] },
    audience: { activeIndex: 1, heading: "Choose who should receive the alert", rows: ["All User Base", "Emergency Community", "Distribution List Folder", "All Operators", "Connect Agreement Managers", "DDL_Geo", "manageDDL_Geo", "Agreement Group", "Emergency Agreement", "Distribution Group"], summary: "Targeting Summary", summaryItems: ["Reachable user　01", "Not Reachable user　01", "By Groups　02", "By Users　00"] },
    organizations: { activeIndex: 2, heading: "Select target organizations", rows: ["Geofence - Global", "Geofence - Sub Org", "North America", "Europe", "Asia Pacific", "Latin America"], summary: "Organization Summary", summaryItems: ["Global Organization", "Sub Organization", "6 organizations"] },
    delivery: { activeIndex: 3, heading: "Select mass devices", rows: ["Desktop App", "Email", "Email — Work", "Mobile App", "Mobile App — Work", "SMS", "Voice Call"], summary: "Delivery Summary", summaryItems: ["Desktop App", "Email", "Mobile App", "SMS"] },
    schedule: { activeIndex: 4, heading: "Schedule the alert", rows: ["Publish immediately", "Schedule for later", "Date", "Time", "Time Zone"], summary: "Schedule Summary", summaryItems: ["Schedule for later", "Date selected", "Time selected"] },
    review: { activeIndex: 4, heading: "Review & Publish", rows: ["Alert Template", "Target Users", "Target Organizations", "Mass Devices", "Schedule"], summary: "Review Summary", summaryItems: ["Ready to publish", "5 steps complete", "Review changes"] },
  };
  const data = previewData[variant];
  return (
    <div className={`target-users-preview ${standalone ? "target-users-standalone" : ""}`}>
      {!standalone && <img src={laptopFrame} alt="" className="target-users-laptop" />}
      <div className="target-users-app" aria-hidden="true">
        <div className="target-users-topbar"><strong>BLACKBERRY ATHOC</strong><span>⌕　♧　⚙　<span className="target-users-avatar">SP</span></span></div>
        <div className="target-users-body">
          <aside className="target-users-sidebar"><span className="target-sidebar-active">▥　Alert</span><span>▣　Account</span><span>◈　Collaborate</span><span>♙　Users</span><span>▤　Organizations</span><span>▥　Reports</span><span>▣　Accounts</span></aside>
          <div className="target-users-content">
            <div className="target-users-steps">{["Alert Template", "Target Users", "Target Organizations", "Mass Devices", "Schedule"].map((step, index) => <span className={`target-step ${index === data.activeIndex ? "target-step-active" : ""}`} key={step}>{index + 1}<br /><b>{step}</b></span>)}</div>
            <h3>{data.heading}</h3>
            <div className="target-users-tabs"><span>By Group</span><span>By User</span><span>By Advanced Query</span><label>⌕　Search</label></div>
            <div className={`target-users-table target-table-${variant}`}><div className="target-table-head"><span>{variant === "audience" ? "GROUP NAME" : "CONFIGURATION"}</span><span>DESCRIPTION</span><span>{variant === "audience" ? "NO OF USERS" : "STATUS"}</span><span>ACTIONS</span></div>{data.rows.map((row, i) => <div className="target-table-row" key={row}><span>☑　{row}</span><span>{variant === "organizations" ? "Organization scope" : variant === "delivery" ? "Available channel" : variant === "schedule" ? "Alert timing" : variant === "review" ? "Completed" : variant === "alert" ? "Template setting" : i % 2 ? "Distribution list" : "Group"}</span><span>{variant === "audience" ? [534,34,23,80,22,18,87,95,43,95][i] ?? 0 : i < 2 ? "Ready" : "Set"}</span><span className="target-block">{variant === "review" ? "Edit" : "Block"}</span></div>)}</div>
            <div className="target-users-footer"><span>Items per page: 15</span><span>1–15 of 150　　‹　›</span></div>
          </div>
          <aside className="target-summary"><strong>{data.summary}</strong><div className={`target-donut target-donut-${variant}`}><b>{variant === "audience" ? "02" : variant === "organizations" ? "06" : variant === "review" ? "05" : "✓"}</b><small>{variant === "audience" ? "Total Users" : "Complete"}</small></div>{data.summaryItems.map((item, index) => <span className={index === 0 ? "reachable" : index === 1 ? "unreachable" : ""} key={item}>● {item}</span>)}</aside>
        </div>
      </div>
    </div>
  );
}

function DetailSection({
  label,
  title,
  children,
  screen = true,
  variant = "audience",
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
  screen?: boolean;
  variant?: PreviewVariant;
}) {
  return (
    <section className={`athoc-detail-section athoc-detail-${variant}`}>
      <Label strong>{label}</Label>
      <div className="athoc-detail-layout">
        {screen && <Screen variant={variant} />}
        <div className="athoc-detail-copy">
          {title && <h2>{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

export default function BlackBerryAtHocPage() {
  return (
    <main className="athoc-page">
      <CaseNav />

      <section className="athoc-hero" id="about">
        <span className="athoc-tag">B2B&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;&nbsp;•&nbsp;&nbsp;SAAS</span>
        <h1>Designing a clearer workflow for configuring emergency alerts</h1>
        <p>
          BlackBerry AtHoc is an enterprise emergency communication platform for configuring and delivering critical alerts. I designed an end-to-end workflow that helps administrators define, target, schedule, and confidently publish alerts.
        </p>
        <div className="athoc-hero-laptop">
          <AlertTemplateHeroPreview />
        </div>
      </section>

      <div className="athoc-meta">
        <div><span>ROLE</span><strong>UX/UI Designer</strong></div>
        <div><span>PRODUCT</span><strong>BLACKBERRY ATHOC</strong></div>
        <div><span>TEAM</span><strong>1 UX/UI Designer</strong></div>
      </div>

      <section className="athoc-confidentiality">
        <h2>Confidentiality Notice</h2>
        <p>
          To respect confidentiality agreements, certain visuals have been blurred or omitted. If you&apos;d like to learn more, I&apos;d be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.
        </p>
      </section>

      <section className="athoc-main" id="projects">
        <section className="athoc-intro">
          <Label strong>THE CHALLENGE</Label>
          <h2>Configuring an alert involves several critical decisions</h2>
          <p>Creating an emergency alert is not just about writing a message. An administrator needs to define:</p>
          <Flow items={["What is being sent", "Who should receive it", "Which organizations are involved", "How it should be delivered", "When it should be sent"]} />
          <div className="athoc-goal">
            <strong>The Goal:</strong>
            <p>Make complex alert configuration easier to navigate, understand, and validate.</p>
          </div>
        </section>

        <section className="athoc-experience">
          <Label strong>THE EXPERIENCE</Label>
          <h2>One alert, five focused decisions</h2>
          <p>The experience is organized into five steps:</p>
          <Flow items={["Alert Template", "Target Users", "Target Organizations", "Mass Devices", "Schedule", "Review & Publish"]} />
          <p>Each step answers one question before the administrator moves to the next.</p>
        </section>

        <DetailSection label="DEFINE THE ALERT" variant="alert">
          <p>The administrator starts by selecting or configuring the alert template. The workflow immediately establishes the five steps required to complete the configuration.</p>
          <p>This gives the administrator a clear sense of:</p>
          <ul>
            <li>Where they are</li>
            <li>What has been completed</li>
            <li>What comes next</li>
          </ul>
        </DetailSection>

        <DetailSection label="DEFINE THE AUDIENCE" title="Choose who should receive the alert" variant="audience">
          <p>Once the alert is defined, the administrator needs to determine its audience. The experience supports three targeting approaches:</p>
          <Flow items={["By Group", "By User", "By Advanced Query"]} />
          <p>This gives administrators flexibility without forcing every alert into the same targeting method.</p>
        </DetailSection>

        <section className="athoc-wide-section">
          <Label strong>THE KEY UX DECISION</Label>
          <h2>The administrator also needs to understand whether those users can actually be reached</h2>
          <p>The Targeting Summary makes this impact visible as the audience changes.</p>
          <p>For example:</p>
          <div className="athoc-summary-examples">
            <div><span>1 selected</span><span>{"→ 1 reachable / 0 not reachable"}</span></div>
            <div><span>2 selected</span><span>{"→ 1 reachable / 1 not reachable"}</span></div>
            <div><span>82 selected</span><span>{"→ 42 reachable / 40 not reachable"}</span></div>
            <div><span>104 selected</span><span>{"→ 62 reachable / 42 not reachable"}</span></div>
          </div>
          <p className="athoc-summary-note">The selection tells administrators who they chose. The summary tells them what that choice means.</p>
        </section>

        <section className="athoc-wide-section athoc-simple-section">
          <Label strong>WHY THE TARGETING SUMMARY MATTERS</Label>
          <h2>Turning a hidden risk into visible information</h2>
          <h3>Overview</h3>
          <p>Without a targeting summary, an administrator could see:</p>
          <div className="athoc-callout">
            <span className="athoc-callout-lead">104 users selected</span>
            <span>But that does not tell them how many users can actually receive the alert.</span>
          </div>
          <p>The summary exposes:</p>
          <ul>
            <li>104 users targeted</li>
            <li>62 reachable</li>
            <li>42 not reachable</li>
          </ul>
          <p>This allows the administrator to identify a potential delivery issue before continuing with the configuration.</p>
        </section>

        <DetailSection label="DEFINE THE ORGANIZATIONAL SCOPE" title="Select target organizations" variant="organizations">
          <p>After defining the audience, the administrator can specify which organizations should be included.</p>
          <p>The organization view provides information such as:</p>
          <ul>
            <li>Organization name</li>
            <li>Organizational structure</li>
            <li>Number of users</li>
            <li>Available actions</li>
          </ul>
          <p>This helps the administrator understand the scope before moving forward.</p>
        </DetailSection>

        <DetailSection label="CHOOSE HOW THE ALERT IS DELIVERED" title="Select mass devices" variant="delivery">
          <p>The next decision is delivery.</p>
          <p>Administrators can choose from available channels such as:</p>
          <ul>
            <li>Desktop App</li>
            <li>Email</li>
            <li>Email — Work</li>
            <li>Mobile App</li>
            <li>Mobile App — Work</li>
            <li>SMS</li>
            <li>Voice Call</li>
          </ul>
          <p>The interface makes the available delivery methods explicit before the alert is scheduled.</p>
        </DetailSection>

        <DetailSection label="DECIDE WHEN IT SHOULD BE SENT" title="Schedule the alert" variant="schedule">
          <p>The administrator can choose between two options:</p>
          <strong>Send immediately</strong>
          <p>The alert can be published immediately after configuration.</p>
          <strong>Schedule for later</strong>
          <p>The administrator can define:</p>
          <p><strong>Date → Time → Time Zone</strong></p>
          <p>This keeps timing as the final configuration decision after the audience and delivery scope have been defined.</p>
        </DetailSection>

        <DetailSection label="ONE FINAL CHECK BEFORE PUBLISHING" title="Review & Publish" variant="review">
          <p>After completing the configuration, the administrator reaches a final review screen.</p>
          <p>Instead of asking them to remember what they selected across multiple steps, the review page brings the configuration together.</p>
          <p>The administrator can review:</p>
          <strong>Template</strong>
          <p>What alert is being configured?</p>
          <strong>Targeting</strong>
          <p>Who has been selected and how?</p>
          <strong>Organizations</strong>
          <p>Which organizations are included?</p>
          <strong>Devices</strong>
          <p>How will the alert be delivered?</p>
          <strong>Schedule</strong>
          <p>When will it be sent?</p>
          <p>If something needs to change, the administrator can edit the relevant section before publishing.</p>
        </DetailSection>

        <section className="athoc-outcome">
          <Label>Outcome</Label>
          <h2>A clearer path from alert creation to publishing</h2>
          <p>The final experience brings the alert configuration into a structured journey.</p>
          <div className="athoc-outcome-grid">
            <div><strong>Structured</strong><p>The step-based workflow separates a complex task into focused decisions.</p></div>
            <div><strong>Transparent</strong><p>The Targeting Summary makes reachability visible before publishing.</p></div>
            <div><strong>Controlled</strong><p>Review &amp; Publish provides a final checkpoint before the alert is sent.</p></div>
          </div>
        </section>

        <section className="athoc-reflection">
          <Label>Reflection</Label>
          <h2>What this project taught me</h2>
          <div className="athoc-reflection-item"><strong>Complex does not always mean complicated</strong><p>The workflow contains many configuration decisions, but breaking them into focused steps makes the experience easier to navigate.</p></div>
          <div className="athoc-reflection-item"><strong>Selection needs context</strong><p>Showing what users selected is useful. Showing the impact of that selection is more valuable.</p></div>
          <div className="athoc-reflection-item"><strong>Enterprise UX needs confidence</strong><p>In a critical communication product, the interface needs to help administrators understand what they configured before they commit to it.</p></div>
        </section>
      </section>
    </main>
  );
}
