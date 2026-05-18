"use client";

import { useEffect, useState } from "react";
import ClaudeLogo from "@/components/ClaudeLogo";
import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    image?: string;
  } | null>(null);

  useEffect(() => {
    setVisible(true);
    const fetchSession = async () => {
      const session = await authClient.getSession();
      if (session?.data?.user) {
        setUser({
          name: session.data.user.name ?? "User",
          email: session.data.user.email ?? "",
          image: session.data.user.image ?? undefined,
        });
      }
    };
    fetchSession();
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut({ fetchOptions: { onSuccess: () => window.location.href = "/" } });
  };

  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{
        background: "var(--color-bg)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s",
      }}
    >
      <div
        className="flex flex-col items-center gap-5 text-center"
        style={{ maxWidth: 400 }}
      >
        <ClaudeLogo size={40} />

        {/* Profile picture */}
        {user?.image ? (
          <img
            src={user.image}
            alt={user.name}
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "2.5px solid var(--color-border)",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(204,120,92,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              color: "var(--color-accent)",
              fontWeight: 600,
            }}
          >
            {user?.name?.[0]?.toUpperCase() ?? "?"}
          </div>
        )}

        {/* Welcome message */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 5vw, 2rem)",
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome, {firstName}!
        </h1>

        {/* User details card */}
        <div
          style={{
            width: "100%",
            background: "var(--color-surface)",
            border: "1.5px solid var(--color-border)",
            borderRadius: "16px",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            textAlign: "left",
          }}
        >
          <div>
            <p style={{ fontSize: "0.72rem", color: "var(--color-muted)", marginBottom: 2 }}>
              FULL NAME
            </p>
            <p style={{ fontSize: "0.92rem", color: "var(--color-text)", fontWeight: 500 }}>
              {user?.name ?? "—"}
            </p>
          </div>

          <div style={{ height: 1, background: "var(--color-border)" }} />

          <div>
            <p style={{ fontSize: "0.72rem", color: "var(--color-muted)", marginBottom: 2 }}>
              EMAIL
            </p>
            <p style={{ fontSize: "0.92rem", color: "var(--color-text)", fontWeight: 500 }}>
              {user?.email ?? "—"}
            </p>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={handleSignOut}
          style={{
            marginTop: 8,
            fontSize: "0.85rem",
            color: "var(--color-accent)",
            fontWeight: 500,
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Sign out →
        </button>
      </div>
    </div>
  );
}