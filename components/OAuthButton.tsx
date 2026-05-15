"use client";

interface OAuthButtonProps {
  provider: "google" | "apple";
  onClick?: () => void;
  loading?: boolean;
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.38a4.6 4.6 0 01-2 3.02v2.5h3.22c1.89-1.74 2.98-4.3 2.98-7.31z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H1.08v2.58A10 10 0 0010 20z" fill="#34A853"/>
      <path d="M4.41 11.9A5.98 5.98 0 014.1 10c0-.66.11-1.3.31-1.9V5.52H1.08A10 10 0 000 10c0 1.61.38 3.13 1.08 4.48l3.33-2.58z" fill="#FBBC05"/>
      <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.86-2.86C14.96 1.0 12.7 0 10 0A10 10 0 001.08 5.52l3.33 2.58C5.2 5.74 7.4 3.98 10 3.98z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 0c.1 1.3-.37 2.58-1.1 3.5-.74.94-1.9 1.66-3.06 1.57-.13-1.26.44-2.57 1.13-3.38C11.2.75 12.43.07 13.5 0zM17.98 14.46c-.34.98-.75 1.88-1.26 2.72-.8 1.3-1.64 2.6-3.1 2.62-1.4.02-1.86-.88-3.47-.87-1.6.01-2.1.9-3.5.89-1.43-.02-2.22-1.26-3.03-2.56C1.3 14.63.5 11.2 1.73 8.87c.86-1.64 2.45-2.68 4.1-2.7 1.5-.03 2.4.9 3.56.9 1.14 0 1.84-.93 3.47-.9 1 .02 2.67.56 3.53 2.14l.01.02c-.1.06-2.1 1.22-2.08 3.64.03 2.9 2.55 3.86 2.56 3.87l.1.32-.02-.08.02.08c0 .07-.03.14-.03.22z" fill="white"/>
    </svg>
  );
}

export default function OAuthButton({ provider, onClick, loading }: OAuthButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="btn-press w-full flex items-center justify-center gap-3 rounded-full py-3.5 px-6 font-medium text-sm transition-all duration-200"
      style={{
        background: "var(--color-btn-dark)",
        color: "#fff",
        border: "none",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.75 : 1,
        letterSpacing: "0.01em",
      }}
    >
      {loading ? (
        <span className="spinner" />
      ) : provider === "google" ? (
        <GoogleIcon />
      ) : (
        <AppleIcon />
      )}
      <span>Continue with {provider === "google" ? "Google" : "Apple"}</span>
    </button>
  );
}
