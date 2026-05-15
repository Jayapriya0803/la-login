"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ClaudeLogo from "@/components/ClaudeLogo";

const errorMessages: Record<string, string> = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The verification token has expired or has already been used.",
  Default: "An unexpected error occurred. Please try again.",
};

export default function AuthError() {
  const params = useSearchParams();
  const error = params.get("error") ?? "Default";
  const message = errorMessages[error] ?? errorMessages.Default;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 text-center" style={{ maxWidth: 380 }}>
        <ClaudeLogo size={36} />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(224,85,85,0.08)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 7v5M11 15v.5M11 1C5.477 1 1 5.477 1 11s4.477 10 10 10 10-4.477 10-10S16.523 1 11 1z"
              stroke="#e05555" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Sign-in error
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            {message}
          </p>
        </div>
        <Link
          href="/"
          style={{
            fontSize: "0.85rem",
            color: "var(--color-accent)",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          ← Try again
        </Link>
      </div>
    </div>
  );
}
