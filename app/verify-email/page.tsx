import ClaudeLogo from "@/components/ClaudeLogo";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 text-center" style={{ maxWidth: 380 }}>
        <ClaudeLogo size={36} />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(204,120,92,0.1)" }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M3 6l10 9 10-9M3 6h20v16H3V6z" stroke="#CC785C" strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Check your email
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            A sign-in link has been sent to your email address. Click the link in the email to
            complete sign-in.
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
          ← Back to sign-in
        </Link>
      </div>
    </div>
  );
}
