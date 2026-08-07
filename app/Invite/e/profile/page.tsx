import InviteDecor from "./InviteDecor";
import InviteDownload from "./InviteDownload";
import TypingName from "./TypingName";

function Corner() {
  return (
    <svg className="frame-corner-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M8 56V18c0-5.5 4.5-10 10-10h38"
        fill="none"
        stroke="#c9a227"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 40c10-2 16-8 18-18M26 8c2 10 8 16 18 18"
        fill="none"
        stroke="#b8942a"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="8" cy="56" r="2.2" fill="#d4b44a" />
      <circle cx="56" cy="8" r="2.2" fill="#d4b44a" />
      <circle cx="26" cy="26" r="2.8" fill="#b8942a" />
      <circle cx="26" cy="26" r="1.1" fill="#f0df9a" />
    </svg>
  );
}

export default function InviteProfilePage() {
  return (
    <main className="invite-stage">
      <article className="invite-card" aria-label="Special party invitation">
        <div className="invite-mat" />
        <div className="invite-frame" aria-hidden="true">
          <span className="frame-line frame-line-outer" />
          <span className="frame-line frame-line-mid" />
          <span className="frame-line frame-line-inner" />
          <span className="frame-corner frame-corner-tl">
            <Corner />
          </span>
          <span className="frame-corner frame-corner-tr">
            <Corner />
          </span>
          <span className="frame-corner frame-corner-bl">
            <Corner />
          </span>
          <span className="frame-corner frame-corner-br">
            <Corner />
          </span>
        </div>

        <div className="invite-content">
          <p className="invite-kicker">Special Party Invitation</p>
          <TypingName />
          <div className="invite-divider" aria-hidden="true" />
          <h1 className="invite-title">You&apos;re Invited</h1>
          <h2 className="invite-cta">RSVP Now &amp; Instructions</h2>

          <div className="invite-steps">
            <p>Get ready for your invitation</p>
            <p>Wait for the download to complete or open the file</p>
            <p>Download your invitation file</p>
            <p>Open to view your invitation and event details</p>
          </div>

          <InviteDownload />
        </div>

        <InviteDecor />
      </article>
    </main>
  );
}
