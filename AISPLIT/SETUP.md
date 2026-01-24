# 🚀 AI Splitwise Clone - Setup Guide

This is a full-stack expense splitting application built with Next.js, Convex, Clerk, and AI-powered features.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Configure Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in the following environment variables:

#### **Convex Setup** (Backend Database & Functions)

1. Go to [Convex Dashboard](https://dashboard.convex.dev)
2. Create a new project or select existing one
3. Copy the deployment URL and add to `.env.local`:
   ```
   CONVEX_DEPLOYMENT=your-deployment-name
   NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
   ```

#### **Clerk Setup** (Authentication)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Navigate to **API Keys** section
4. Copy the keys and add to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
   CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
   ```
5. Go to **JWT Templates** → Create a new template named "convex"
6. Copy the Issuer URL and add to `.env.local`:
   ```
   CLERK_JWT_ISSUER_DOMAIN=your-domain.clerk.accounts.dev
   ```

#### **Resend Setup** (Email Service)

1. Go to [Resend](https://resend.com/api-keys)
2. Create an account and generate an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### **Google Gemini AI Setup** (AI Features)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add to `.env.local`:
   ```
   GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxx
   ```

### 3. Initialize Convex

Run the Convex development server:

```bash
npx convex dev
```

This will:

- Connect to your Convex deployment
- Set up the database schema
- Start watching for changes

**Note:** Keep this terminal running!

### 4. Seed the Database (Optional)

If you want to populate the database with sample data:

```bash
npx convex run seed:seedDatabase
```

### 5. Run the Development Server

In a **new terminal window**, start the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🎯 Features

- ✅ User authentication with Clerk
- ✅ Create and manage expense groups
- ✅ Split expenses equally or by custom amounts
- ✅ Track balances and settlements
- ✅ AI-powered spending insights (powered by Gemini)
- ✅ Email notifications (via Resend & Inngest)
- ✅ Real-time updates (via Convex)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   └── api/               # API routes
├── components/            # React components
├── convex/               # Convex backend functions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Convex connection issues

- Make sure `npx convex dev` is running
- Check that your `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` are correct

### Authentication issues

- Verify all Clerk environment variables are set correctly
- Ensure the JWT issuer domain matches your Clerk settings
- Make sure you've created a "convex" JWT template in Clerk

### Email sending issues

- Verify your Resend API key is valid
- Check that you've verified your domain in Resend (for production)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Clerk Documentation](https://clerk.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Inngest Documentation](https://www.inngest.com/docs)

## 🤝 Support

For issues and questions, please refer to the project's GitHub repository or contact the maintainer.

---

**Happy coding! 🎉**
