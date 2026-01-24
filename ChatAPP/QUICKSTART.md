# 🚀 Quick Start Guide - ChatAPP

## Ready to Run in 3 Steps!

Your ChatAPP is pre-configured and ready to run. All environment variables are already set up!

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm run dev
```

✅ Backend will start on: **http://localhost:3000**

### Step 3: Start the Frontend

Open a **NEW terminal** and run:

```bash
cd frontend
npm run dev
```

✅ Frontend will start on: **http://localhost:5173**

### 🎉 That's it! 

Open your browser and go to **http://localhost:5173** to start chatting!

---

## 📝 What's Already Configured?

- ✅ MongoDB Atlas connection
- ✅ JWT authentication
- ✅ Cloudinary for image uploads
- ✅ Resend for email notifications
- ✅ Arcjet security
- ✅ Socket.IO for real-time chat
- ✅ CORS configured for local development

---

## 🛠️ Available Scripts

### Backend
```bash
npm run dev      # Run with nodemon (auto-restart on changes)
npm start        # Run in production mode
```

### Frontend
```bash
npm run dev      # Run development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
```

### Root (Full Stack)
```bash
npm run build    # Build both backend and frontend
npm start        # Start production server
```

---

## 🔥 Features

- 🔐 User Authentication (Sign up, Login, Logout)
- 💬 Real-time messaging
- 📷 Image sharing
- 🔔 Sound notifications
- 👥 Online/offline status
- 🎨 Beautiful UI with Tailwind & DaisyUI

---

## ⚠️ Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 3000 (backend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### Module Not Found?
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS or Connection Issues?
- Make sure both backend (port 3000) and frontend (port 5173) are running
- Check that `CLIENT_URL` in `backend/.env` is set to `http://localhost:5173`

---

## 📚 Need More Details?

Check out **SETUP.md** for detailed configuration options and troubleshooting.

---

## 🎯 Next Steps

1. Create an account at http://localhost:5173
2. Update your profile with an avatar
3. Start chatting with other users!

**Enjoy your ChatAPP! 💬**
