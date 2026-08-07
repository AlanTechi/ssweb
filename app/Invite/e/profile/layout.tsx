import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./invite.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-invite-serif",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-invite-script",
});

export const metadata: Metadata = {
  title: "Elegant Invitation",
  description: "Special Party Invitation — You're Invited",
  robots: { index: false, follow: false },
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${serif.variable} ${script.variable} invite-root`}>
      {children}
    </div>
  );
}
