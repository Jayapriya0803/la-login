# Claude Login — Next.js

A pixel-faithful recreation of Claude's login module, built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **NextAuth.js**.

## Features

- ✅ Google OAuth sign-in  
- ✅ Apple OAuth sign-in (add Apple provider key to extend)  
- ✅ Magic-link email sign-in  
- ✅ Loading states on all buttons  
- ✅ Email validation with inline error  
- ✅ Post-login dashboard page  
- ✅ Auth error page  
- ✅ Email verification pending page  
- ✅ Staggered entrance animations  
- ✅ Claude brand colors and typography  

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials (see below)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Where to get it |
|---|---|
| `NEXTAUTH_SECRET` | Run `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `http://localhost:3000` for local dev |
| `GOOGLE_CLIENT_ID` | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → Create OAuth 2.0 Client |
| `GOOGLE_CLIENT_SECRET` | Same as above |
| `EMAIL_SERVER` | SMTP URL — e.g. use [Resend](https://resend.com) or [Mailtrap](https://mailtrap.io) |
| `EMAIL_FROM` | Sender address like `noreply@yourdomain.com` |

### Google OAuth setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a project → Enable **Google+ API**
3. Create **OAuth 2.0 Client ID** (Web application)
4. Add `http://localhost:3000/api/auth/callback/google` to **Authorised redirect URIs**

---

## Project Structure

```
claude-login/
├── app/
│   ├── layout.tsx           # Root layout + fonts
│   ├── page.tsx             # Login page (renders LoginPage component)
│   ├── globals.css          # Design tokens, animations
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts         # NextAuth handler (Google + Email)
│   ├── verify-email/
│   │   └── page.tsx         # Magic link sent confirmation
│   ├── auth/error/
│   │   └── page.tsx         # Auth error screen
│   └── dashboard/
│       └── page.tsx         # Protected page after login
├── components/
│   ├── LoginPage.tsx        # Main login UI (orchestrates all parts)
│   ├── ClaudeLogo.tsx       # SVG asterisk brand mark
│   ├── OAuthButton.tsx      # Google / Apple OAuth buttons
│   └── EmailForm.tsx        # Email input + validation + submit
├── .env.local.example       # Environment variable template
└── README.md
```

---

## Extending

**Add Apple Sign-In:**  
Install `next-auth/providers/apple`, add your Apple credentials to `.env.local`, and add `AppleProvider` in `app/api/auth/[...nextauth]/route.ts`.

**Protect routes:**  
Use NextAuth's `getServerSession` in any Server Component:
```ts
import { getServerSession } from "next-auth";
const session = await getServerSession();
if (!session) redirect("/");
```
