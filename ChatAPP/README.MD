<h1 align="center">✨ Full-Stack Chat App with Auth & Emails ✨</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

## 🚀 Quick Start

**Your app is ready to run! All environment variables are pre-configured.**

```bash
# 1. Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 2. Start backend (in one terminal)
cd backend && npm run dev

# 3. Start frontend (in another terminal)
cd frontend && npm run dev
```

Then open **http://localhost:5173** in your browser!

� For detailed setup instructions, see [QUICKSTART.md](./QUICKSTART.md)

---

## ✨ Highlights

- 🔐 **JWT Authentication** - Custom implementation with secure token handling
- ⚡ **Real-time Messaging** - Powered by Socket.IO for instant communication
- 🟢 **Presence Indicators** - See who's online/offline in real-time
- 🔔 **Sound Effects** - Notification & typing sounds (toggleable)
- 📨 **Welcome Emails** - Automated signup emails via Resend
- 🗂️ **Image Uploads** - Cloudinary integration for seamless file sharing
- 🧰 **REST API** - Built with Node.js & Express
- 🧱 **MongoDB** - NoSQL database for data persistence
- 🚦 **Rate Limiting** - API protection powered by Arcjet
- 🎨 **Modern UI** - React, Tailwind CSS & DaisyUI
- 🧠 **State Management** - Zustand for simple, efficient state handling
- 🚀 **Production Ready** - Configured for easy deployment

---

## �️ Tech Stack

### Backend
- **Node.js** & **Express** - Server framework
- **MongoDB** & **Mongoose** - Database
- **Socket.IO** - Real-time communication
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Resend** - Email service
- **Arcjet** - Security & rate limiting

### Frontend
- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **DaisyUI** - Component library
- **Zustand** - State management
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time updates
- **React Router** - Navigation
- **Lucide React** - Icon library

---

## 📁 Project Structure

```
ChatAPP/
├── backend/              # Express.js backend server
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── models/       # MongoDB schemas
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Auth, rate limiting, etc.
│   │   ├── lib/          # Utilities & configs
│   │   ├── emails/       # Email templates
│   │   └── server.js     # Entry point
│   └── .env              # Environment variables (pre-configured!)
│
├── frontend/             # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages
│   │   ├── store/        # Zustand stores
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # API client & utilities
│   └── public/           # Static assets
│
├── QUICKSTART.md         # Quick setup guide
├── SETUP.md              # Detailed setup & troubleshooting
└── README.md             # This file
```

---

## 🔑 Environment Variables

All environment variables are **already configured** in `backend/.env`:

```bash
PORT=3000
MONGO_URI=mongodb+srv://...           # MongoDB Atlas connection
NODE_ENV=development
JWT_SECRET=your_jwt_secret            # Change in production!
CLIENT_URL=http://localhost:5173
RESEND_API_KEY=re_...                 # Email service
EMAIL_FROM=...
CLOUDINARY_CLOUD_NAME=...             # Image uploads
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
ARCJET_KEY=ajkey_...                  # Security
ARCJET_ENV=development
```

---

## 🌟 Features

### Authentication
- ✅ User registration with email validation
- ✅ Secure login with JWT tokens
- ✅ Automatic welcome emails
- ✅ Profile management with avatar upload
- ✅ Session persistence

### Messaging
- ✅ Real-time chat with Socket.IO
- ✅ Text and image messages
- ✅ Message history
- ✅ Typing indicators
- ✅ Sound notifications

### User Experience
- ✅ Online/offline status
- ✅ User list with last message preview
- ✅ Responsive design (mobile-friendly)
- ✅ Dark/light theme support
- ✅ Smooth animations
- ✅ Loading states

---

## 🚀 Available Scripts

### Backend
```bash
npm run dev      # Development mode with auto-restart
npm start        # Production mode
```

### Frontend
```bash
npm run dev      # Development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Root
```bash
npm run build    # Build both backend & frontend
npm start        # Start production server
```

---

## � API Endpoints

### Authentication
```
POST   /api/auth/signup          # Register new user
POST   /api/auth/login           # Login user
POST   /api/auth/logout          # Logout user
GET    /api/auth/check           # Check authentication
PUT    /api/auth/update-profile  # Update user profile
```

### Messages
```
GET    /api/messages/users       # Get all users
GET    /api/messages/:userId     # Get messages with user
POST   /api/messages/send/:userId # Send message to user
```

---

## 🐛 Troubleshooting

See [SETUP.md](./SETUP.md) for detailed troubleshooting steps.

**Common Issues:**
- **Port in use**: Kill process with `lsof -ti:3000 | xargs kill -9`
- **Module errors**: Delete `node_modules` and `package-lock.json`, then `npm install`
- **CORS errors**: Ensure both servers are running and `CLIENT_URL` is correct

---

## 📝 License

ISC

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Author

Built with ❤️ using modern web technologies

---

**Happy Coding! 💬✨**
