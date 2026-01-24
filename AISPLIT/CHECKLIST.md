# ✅ Setup Checklist

Use this checklist to ensure everything is configured correctly.

## Initial Setup

- [ ] Node.js 18+ installed (`node --version`)
- [ ] Project dependencies installed (`npm install`)
- [ ] `.env.local` file exists

## Environment Variables

### Convex (Required)

- [ ] `CONVEX_DEPLOYMENT` - from [dashboard.convex.dev](https://dashboard.convex.dev)
- [ ] `NEXT_PUBLIC_CONVEX_URL` - from [dashboard.convex.dev](https://dashboard.convex.dev)

### Clerk Authentication (Required)

- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - from [dashboard.clerk.com](https://dashboard.clerk.com)
- [ ] `CLERK_SECRET_KEY` - from [dashboard.clerk.com](https://dashboard.clerk.com)
- [ ] `CLERK_JWT_ISSUER_DOMAIN` - from Clerk JWT Templates
- [ ] Created "convex" JWT template in Clerk dashboard

### Email Service (Optional - for notifications)

- [ ] `RESEND_API_KEY` - from [resend.com](https://resend.com/api-keys)

### AI Features (Optional - for spending insights)

- [ ] `GEMINI_API_KEY` - from [Google AI Studio](https://makersuite.google.com/app/apikey)

## Running the App

### Terminal 1 - Convex Backend

- [ ] Run: `npx convex dev`
- [ ] Shows "Convex functions ready"
- [ ] Keep this terminal running

### Terminal 2 - Next.js App

- [ ] Run: `npm run dev`
- [ ] Shows "Ready on http://localhost:3000"
- [ ] Keep this terminal running

## Testing

- [ ] Open http://localhost:3000
- [ ] Can see the landing page
- [ ] Can click "Sign In" and see Clerk auth
- [ ] Can create an account
- [ ] Can access the dashboard after signing in

## Optional

- [ ] Seed database: `npx convex run seed:seedDatabase`
- [ ] Test email notifications (requires Resend)
- [ ] Test AI insights (requires Gemini)

---

## Quick Reference

### Convex Setup

1. Go to https://dashboard.convex.dev
2. Create new project
3. Copy deployment name and URL

### Clerk Setup

1. Go to https://dashboard.clerk.com
2. Create new application
3. Copy API keys from "API Keys" tab
4. Go to "JWT Templates" → Create "convex" template
5. Copy issuer URL

### Resend Setup

1. Go to https://resend.com
2. Sign up and verify email
3. Generate API key

### Gemini Setup

1. Go to https://makersuite.google.com/app/apikey
2. Create API key
3. Copy the key

---

**✨ Once all required items are checked, your app is ready to run!**
