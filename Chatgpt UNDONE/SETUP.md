# SETUP GUIDE

## Quick Start (Already Configured)

Your project is already configured with API keys! You can start immediately:

### Option 1: Run servers separately (Recommended)

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd client
npm run dev
```

### Option 2: Use the setup script (First time only)

```bash
chmod +x setup.sh
./setup.sh
```

### Option 3: Use the start script (Run both servers)

```bash
chmod +x start-dev.sh
./start-dev.sh
```

## Current Configuration

### Backend (Port 4000)

✅ MongoDB Atlas configured
✅ Clerk authentication configured
✅ ImageKit configured
✅ CORS enabled for localhost:5173

### Frontend (Port 5173)

✅ Clerk authentication configured
✅ Google Gemini AI configured
✅ ImageKit configured
✅ API URL pointing to localhost:4000

## Access the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000

## Environment Variables Already Set

### Backend (.env)

- ✅ PORT=4000
- ✅ MONGO (MongoDB Atlas)
- ✅ CLIENT_URL
- ✅ CLERK_PUBLISHABLE_KEY
- ✅ CLERK_SECRET_KEY
- ✅ IMAGE*KIT*\* (all keys)

### Client (.env)

- ✅ VITE_API_URL
- ✅ VITE_CLERK_PUBLISHABLE_KEY
- ✅ VITE_GEMINI_PUBLIC_KEY
- ✅ VITE*IMAGE_KIT*\* (all keys)

## Troubleshooting

### If MongoDB connection fails:

1. Check your internet connection
2. Verify MongoDB Atlas cluster is active
3. Ensure IP whitelist includes your current IP

### If ports are in use:

- Backend: Change PORT in backend/.env
- Frontend: Vite will automatically prompt you to use another port

### If dependencies are missing:

```bash
# Backend
cd backend
npm install

# Frontend
cd client
npm install
```

## Features

✨ AI Chat powered by Google Gemini
🔐 Secure authentication with Clerk
💬 Multiple chat conversations
📸 Image upload support
💾 Persistent chat history
🎨 Modern responsive UI

## Need Help?

Check the main README.md for detailed documentation and API information.
