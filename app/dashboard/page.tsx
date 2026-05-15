"use client";

import { useEffect, useState } from "react";
import ClaudeLogo from "@/components/ClaudeLogo";
import Link from "next/link";

export default function Dashboard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{ background: "var(--color-bg)", opacity: visible ? 1 : 0, transition: "opacity 0.4s" }}
    >
      <div className="flex flex-col items-center gap-5 text-center" style={{ maxWidth: 400 }}>
        <ClaudeLogo size={40} />
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 5vw, 2rem)",
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome back
        </h1>
        <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
          You&apos;re signed in. This is your protected dashboard.
        </p>
        <Link
          href="/api/auth/signout"
          style={{
            marginTop: 8,
            fontSize: "0.85rem",
            color: "var(--color-accent)",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Sign out →
        </Link>
      </div>
    </div>
  );
}
