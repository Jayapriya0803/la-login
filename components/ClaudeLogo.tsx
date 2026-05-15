"use client";

import Image from "next/image";

export default function ClaudeLogo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={size}
      height={size}
      priority
      style={{ borderRadius: size * 0.22 }}
    />
  );
}
