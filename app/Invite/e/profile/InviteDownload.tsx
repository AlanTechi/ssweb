"use client";

import { useEffect } from "react";

/** Put your file at: public/downloads/invitation.pdf */
export const INVITE_FILE_URL = "/downloads/invitation.pdf";
export const INVITE_FILE_NAME = "invitation.pdf";

function triggerDownload() {
  const link = document.createElement("a");
  link.href = INVITE_FILE_URL;
  link.download = INVITE_FILE_NAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function InviteDownload() {
  useEffect(() => {
    // Auto-download as soon as the page loads
    const timer = window.setTimeout(() => {
      triggerDownload();
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="invite-download">
      <button
        type="button"
        className="invite-download-btn"
        onClick={triggerDownload}
      >
        Download Invitation
      </button>
      <p className="invite-download-hint">
        If the download didn&apos;t start, tap the button above
      </p>
    </div>
  );
}
