"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function TypingName() {
  const searchParams = useSearchParams();
  const name = (searchParams.get("name") ?? "").trim() || "Guest";
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setDeleting(false);
  }, [name]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setText(name);
      return;
    }

    const atEnd = text === name;
    const atStart = text.length === 0;

    let delay = deleting ? 70 : 140;
    if (atEnd && !deleting) delay = 1800;
    if (atStart && deleting) delay = 500;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (atEnd) {
          setDeleting(true);
        } else {
          setText(name.slice(0, text.length + 1));
        }
      } else if (atStart) {
        setDeleting(false);
      } else {
        setText(name.slice(0, text.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, name]);

  return (
    <p className="invite-script" aria-label={name}>
      <span className="invite-script-text">{text}</span>
      <span className="invite-caret" aria-hidden="true" />
    </p>
  );
}
