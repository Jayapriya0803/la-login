"use client";

import { useState } from "react";
import ClaudeLogo from "./ClaudeLogo";
import OAuthButton from "./OAuthButton";
import EmailForm from "./EmailForm";

type LoadingState = "none" | "google" | "apple" | "email";

export default function LoginPage() {
  const [loading, setLoading] = useState<LoadingState>("none");
  const [successMsg, setSuccessMsg] = useState("");

  const simulateOAuth = (provider: "google" | "apple") => {
    setLoading(provider);
    // Simulate OAuth redirect delay
    setTimeout(() => {
      setLoading("none");
      setSuccessMsg(`Redirecting to ${provider === "google" ? "Google" : "Apple"} sign-in…`);
    }, 1800);
  };

  const handleEmailSubmit = (email: string) => {
    setLoading("email");
    setTimeout(() => {
      setLoading("none");
      setSuccessMsg(`Check your inbox — we sent a link to ${email}`);
    }, 1800);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-12"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(204,120,92,0.07) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        className="relative w-full flex flex-col items-center gap-7"
        style={{ maxWidth: 400 }}
      >
        {/* Logo + Wordmark */}
        <div className="anim-1 flex flex-col items-center gap-3">
          <ClaudeLogo size={40} />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 5vw, 2rem)",
              fontWeight: 500,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Lokalads
          </h1>
        </div>

        {/* Headline */}
        <div className="anim-2 text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.55rem, 5vw, 2rem)",
              fontWeight: 500,
              lineHeight: 1.25,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Do your best work
            <br />
            with Lokalads
          </p>
        </div>

        {/* Card */}
        <div
          className="anim-3 w-full flex flex-col gap-4 rounded-2xl p-6"
          style={{
            background: "var(--color-surface)",
            border: "1.5px solid var(--color-border)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Success state */}
          {successMsg ? (
            <div
              className="text-center py-4"
              style={{ animation: "fadeUp 0.4s ease forwards" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(204,120,92,0.12)" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="#CC785C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ color: "var(--color-text)", fontSize: "0.92rem", fontWeight: 500 }}>
                {successMsg}
              </p>
              <button
                onClick={() => setSuccessMsg("")}
                className="mt-4 text-xs underline"
                style={{ color: "var(--color-muted)", background: "none", border: "none", cursor: "pointer" }}
              >
                Back to sign-in
              </button>
            </div>
          ) : (
            <>
              {/* OAuth Buttons */}
              <div className="flex flex-col gap-3">
                <OAuthButton
                  provider="google"
                  onClick={() => simulateOAuth("google")}
                  loading={loading === "google"}
                />
                <OAuthButton
                  provider="apple"
                  onClick={() => simulateOAuth("apple")}
                  loading={loading === "apple"}
                />
              </div>

              {/* Divider */}
              <div className="divider">or</div>

              {/* Email Form */}
              <EmailForm
                onSubmit={handleEmailSubmit}
                loading={loading === "email"}
              />
            </>
          )}
        </div>

        {/* Legal copy */}
        <p
          className="anim-4 text-center"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-muted)",
            lineHeight: 1.6,
            maxWidth: 320,
          }}
        >
          By continuing, you agree to Anthropic&apos;s{" "}
          <a
            href="https://www.anthropic.com/legal/consumer-terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Consumer Terms
          </a>{" "}
          and{" "}
          <a
            href="https://www.anthropic.com/legal/usage-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Usage Policy
          </a>
          , and acknowledge their{" "}
          <a
            href="https://www.anthropic.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-text)", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* Sign up link */}
        <p
          className="anim-5 text-center"
          style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign up free
          </a>
        </p>
      </div>
    </div>
  );
}
