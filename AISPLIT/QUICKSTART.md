# 🚀 Quick Start Guide

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Steps to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Fill in your `.env.local` file with the following credentials:

#### Get Convex Credentials:

1. Visit https://dashboard.convex.dev
2. Create a new project (or select existing)
3. Copy `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`

#### Get Clerk Credentials:

1. Visit https://dashboard.clerk.com
2. Create a new application
3. Go to **API Keys** and copy:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Go to **JWT Templates** → Create template named "convex"
5. Copy the issuer URL for `CLERK_JWT_ISSUER_DOMAIN`

#### Get Resend API Key:

1. Visit https://resend.com/api-keys
2. Create account and generate API key
3. Copy as `RESEND_API_KEY`

#### Get Gemini API Key:

1. Visit https://makersuite.google.com/app/apikey
2. Create API key
3. Copy as `GEMINI_API_KEY`

### 3. Start Convex Backend

**In Terminal 1:**

```bash
npx convex dev
```

Keep this running!

### 4. (Optional) Seed Database

```bash
npx convex run seed:seedDatabase
```

### 5. Start Development Server

**In Terminal 2:**

```bash
npm run dev
```

### 6. Open Application

Visit http://localhost:3000

---

## 🎯 What You Can Do

- ✅ Create expense groups with friends
- ✅ Add and split expenses
- ✅ Track who owes whom
- ✅ Settle up balances
- ✅ Get AI-powered spending insights
- ✅ Receive email notifications

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS
- **Backend:** Convex (serverless backend)
- **Auth:** Clerk
- **Email:** Resend + Inngest
- **AI:** Google Gemini

## 📝 Notes

- Make sure both terminals (Convex and Next.js) are running
- First time setup might take a few minutes
- Check SETUP.md for detailed troubleshooting

Enjoy! 🎉
