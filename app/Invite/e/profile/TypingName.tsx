"use client";

import { useEffect, useState } from "react";

const NAME = "Joe Doe";

export default function TypingName() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setText(NAME);
      return;
    }

    const atEnd = text === NAME;
    const atStart = text.length === 0;

    let delay = deleting ? 70 : 140;
    if (atEnd && !deleting) delay = 1800;
    if (atStart && deleting) delay = 500;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (atEnd) {
          setDeleting(true);
        } else {
          setText(NAME.slice(0, text.length + 1));
        }
      } else if (atStart) {
        setDeleting(false);
      } else {
        setText(NAME.slice(0, text.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting]);

  return (
    <p className="invite-script" aria-label={NAME}>
      <span className="invite-script-text">{text}</span>
      <span className="invite-caret" aria-hidden="true" />
    </p>
  );
}
