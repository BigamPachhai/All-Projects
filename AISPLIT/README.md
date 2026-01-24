# 🎯 Full Stack AI Splitwise Clone

**Built with:** Next.js 15, Convex, Clerk, Tailwind, Inngest, Shadcn UI & Google Gemini AI

![splitr](https://github.com/user-attachments/assets/11e138c4-efcf-4a85-8586-f2993da118d8)

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

```bash
npm run setup
```

### Option 2: Manual Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - A `.env.local` file has been created for you
   - Fill in the required credentials (see below)

3. **Start Convex backend** (Terminal 1):

   ```bash
   npm run convex:dev
   ```

4. **Start Next.js app** (Terminal 2):

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🔑 Required Environment Variables

Your `.env.local` file needs these credentials:

| Service       | Variables                                                                              | Get From                                                          |
| ------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Convex**    | `CONVEX_DEPLOYMENT`<br>`NEXT_PUBLIC_CONVEX_URL`                                        | [dashboard.convex.dev](https://dashboard.convex.dev)              |
| **Clerk**     | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`<br>`CLERK_SECRET_KEY`<br>`CLERK_JWT_ISSUER_DOMAIN` | [dashboard.clerk.com](https://dashboard.clerk.com)                |
| **Resend**    | `RESEND_API_KEY`                                                                       | [resend.com/api-keys](https://resend.com/api-keys)                |
| **Gemini AI** | `GEMINI_API_KEY`                                                                       | [makersuite.google.com](https://makersuite.google.com/app/apikey) |

📖 **Detailed setup instructions:** See [SETUP.md](./SETUP.md) or [QUICKSTART.md](./QUICKSTART.md)

## ✨ Features

- 🔐 Secure authentication with Clerk
- 👥 Create and manage expense groups
- 💰 Split expenses (equal or custom amounts)
- 📊 Track balances and settlements in real-time
- 🤖 AI-powered spending insights with Gemini
- 📧 Automated email notifications via Resend & Inngest
- ⚡ Real-time data sync with Convex
- 🎨 Beautiful UI with Tailwind & Shadcn

## 📦 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Backend:** Convex (serverless database & functions)
- **Auth:** Clerk
- **Styling:** Tailwind CSS + Shadcn UI
- **Email:** Resend + Inngest
- **AI:** Google Gemini
- **Forms:** React Hook Form + Zod

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Auth pages (sign-in, sign-up)
│   ├── (main)/            # Protected app pages
│   └── api/               # API routes
├── components/            # Reusable components
├── convex/               # Backend functions & schema
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & configs
└── public/               # Static assets
```

## 🛠️ Available Scripts

```bash
npm run dev           # Start development server
npm run convex:dev    # Start Convex backend
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run ESLint
npm run setup         # Install & setup
```

## 📺 Tutorial

Full tutorial: [https://youtu.be/Ce7O3p7-YDI](https://youtu.be/Ce7O3p7-YDI)

## 🐛 Troubleshooting

**Can't connect to Convex?**

- Ensure `npx convex dev` is running
- Check your `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`

**Auth not working?**

- Verify all Clerk environment variables
- Create a "convex" JWT template in Clerk dashboard
- Check `CLERK_JWT_ISSUER_DOMAIN` matches your Clerk settings

**Emails not sending?**

- Verify your `RESEND_API_KEY`
- For production, verify your domain in Resend

See [SETUP.md](./SETUP.md) for detailed troubleshooting.

---

Made with ❤️ using Next.js, Convex, and AI
