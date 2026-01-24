# 🚀 Quick Start Guide

## Your app is ready to run!

All environment variables and dependencies are already configured.

## Start the Application

### Method 1: Separate Terminals (Recommended)

**Terminal 1 - Start Backend:**

```bash
cd backend
npm run dev
```

✅ Backend will run on: http://localhost:4000

**Terminal 2 - Start Frontend:**

```bash
cd client
npm run dev
```

✅ Frontend will run on: http://localhost:5173

### Method 2: Using npm scripts from root

**Terminal 1:**

```bash
npm run dev:backend
```

**Terminal 2:**

```bash
npm run dev:client
```

### Method 3: Automated Start Script

```bash
npm start
```

This will start both servers automatically.

## ✅ What's Already Configured

### Backend

- ✅ MongoDB Atlas connection
- ✅ Clerk authentication
- ✅ ImageKit for image uploads
- ✅ CORS enabled
- ✅ Express server on port 4000

### Frontend

- ✅ React with Vite
- ✅ Google Gemini AI
- ✅ Clerk authentication
- ✅ ImageKit integration
- ✅ React Router
- ✅ TanStack Query

## 📝 Project Structure

```
├── backend/          # Express server
│   ├── models/      # MongoDB schemas
│   ├── index.js     # Main server file
│   └── .env         # Backend config (✅ configured)
│
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── routes/
│   │   └── lib/
│   └── .env         # Frontend config (✅ configured)
│
├── setup.sh         # Setup dependencies
├── start-dev.sh     # Start both servers
└── SETUP.md         # Detailed setup guide
```

## 🎯 First Time Setup

If this is your first time running the app:

1. **Install dependencies** (if not already installed):

   ```bash
   npm run install:all
   ```

   Or use the setup script:

   ```bash
   ./setup.sh
   ```

2. **Start the servers** (see methods above)

3. **Open your browser**: http://localhost:5173

## 🔧 Configuration Files

### Backend (.env) - Already Set ✅

- PORT=4000
- MONGO (MongoDB Atlas)
- CLIENT_URL
- CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- IMAGE_KIT_ENDPOINT
- IMAGE_KIT_PUBLIC_KEY
- IMAGE_KIT_PRIVATE_KEY

### Client (.env) - Already Set ✅

- VITE_API_URL=http://localhost:4000
- VITE_CLERK_PUBLISHABLE_KEY
- VITE_GEMINI_PUBLIC_KEY
- VITE_IMAGE_KIT_ENDPOINT
- VITE_IMAGE_KIT_PUBLIC_KEY

## 🎨 Features

- 🤖 AI-powered chat with Google Gemini
- 🔐 User authentication via Clerk
- 💬 Multiple chat conversations
- 📸 Image upload support
- 💾 Persistent chat history
- 🎨 Modern responsive UI

## 🐛 Troubleshooting

### Port already in use?

- Backend: Change PORT in `backend/.env`
- Frontend: Vite will prompt to use another port

### Connection errors?

- Ensure MongoDB Atlas is accessible
- Check your internet connection
- Verify API keys in .env files

### Dependencies missing?

```bash
npm run install:all
```

## 📚 More Information

- See `README.md` for detailed documentation
- See `SETUP.md` for step-by-step setup guide

---

**Ready to start?** Run `npm run dev:backend` and `npm run dev:client` in separate terminals! 🎉
