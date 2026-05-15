"use client";

import { useState } from "react";

interface EmailFormProps {
  onSubmit: (email: string) => void;
  loading?: boolean;
}

export default function EmailForm({ onSubmit, loading }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showError = touched && email.length > 0 && !isValid;

  const handleSubmit = () => {
    setTouched(true);
    if (isValid) onSubmit(email);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Personal or work email"
          className="email-input w-full rounded-full py-3.5 px-5 text-sm transition-all duration-200"
          style={{
            background: "#fff",
            border: `1.5px solid ${showError ? "#e05555" : "var(--color-border)"}`,
            color: "var(--color-text)",
            fontFamily: "var(--font-body)",
          }}
        />
      </div>
      {showError && (
        <p className="text-xs px-2" style={{ color: "#e05555" }}>
          Please enter a valid email address.
        </p>
      )}
      {email.length > 0 && (
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-press w-full rounded-full py-3.5 px-6 text-sm font-medium transition-all duration-200 mt-1"
          style={{
            background: isValid ? "var(--color-accent)" : "var(--color-border)",
            color: isValid ? "#fff" : "var(--color-muted)",
            cursor: isValid ? "pointer" : "not-allowed",
            border: "none",
            letterSpacing: "0.01em",
          }}
        >
          {loading ? <span className="spinner" /> : "Continue with Email"}
        </button>
      )}
    </div>
  );
}
