"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessages: Record<string, string> = {
    OAuthSignin: "Error starting Google sign-in. Please try again.",
    OAuthCallback: "Error during Google sign-in. Please try again.",
    OAuthCreateAccount: "Could not create account. Please try again.",
    EmailCreateAccount: "Could not create account. Please try again.",
    Callback: "Error during sign-in callback. Please try again.",
    AccessDenied: "Access denied. You may not have permission.",
    Verification: "The verification link has expired. Please try again.",
    Default: "An error occurred during sign-in. Please try again.",
  };

  const message = error ? errorMessages[error] ?? errorMessages.Default : errorMessages.Default;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "var(--color-surface)",
          border: "1.5px solid var(--color-border)",
          borderRadius: "16px",
          padding: "32px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Error icon */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(204,92,92,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 7v5M11 15h.01" stroke="#cc5c5c" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="9" stroke="#cc5c5c" strokeWidth="2"/>
          </svg>
        </div>

        <h1
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "var(--color-text)",
            marginBottom: "8px",
          }}
        >
          Sign-in Error
        </h1>

        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--color-muted)",
            marginBottom: "24px",
            lineHeight: 1.5,
          }}
        >
          {message}
        </p>

        
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: "8px",
            background: "var(--color-accent)",
            color: "#fff",
            fontWeight: 500,
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          Back to sign-in
        </a>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense>
      <AuthErrorContent />
    </Suspense>
  );
}