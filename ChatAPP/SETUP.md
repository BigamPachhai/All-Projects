# ChatAPP - Setup Guide

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (>= 20.0.0)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**

## Installation Steps

### 1. Clone the Repository

```bash
cd /path/to/ChatAPP
```

### 2. Install Dependencies

Install dependencies for both backend and frontend:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Configure Environment Variables

#### Backend Configuration

1. Navigate to the `backend` folder
2. Copy `.env.example` to `.env`:
   ```bash
   cd backend
   cp .env.example .env
   ```

3. Edit `backend/.env` and update the following variables:

**Required:**
- `MONGO_URI`: Your MongoDB connection string
  - For local MongoDB: `mongodb://localhost:27017/chatapp`
  - For MongoDB Atlas: `mongodb+srv://<username>:<password>@cluster.mongodb.net/chatapp`
- `JWT_SECRET`: A strong secret key for JWT tokens (change the default!)
- `CLIENT_URL`: Frontend URL (default: `http://localhost:5173`)

**Optional (for full features):**
- `RESEND_API_KEY`: Get from [Resend](https://resend.com/) for email functionality
- `CLOUDINARY_*`: Get from [Cloudinary](https://cloudinary.com/) for image uploads
- `ARCJET_KEY`: Get from [Arcjet](https://arcjet.com/) for security features

### 4. Set Up MongoDB

#### Option A: Local MongoDB
```bash
# Install MongoDB (macOS)
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string and update `MONGO_URI` in `.env`

### 5. Run the Application

#### Development Mode (Recommended for development)

Run backend and frontend separately in different terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

#### Production Mode

```bash
# From root directory
npm run build
npm start
```

## Features

- 🔐 User Authentication (Sign up, Login, Logout)
- 💬 Real-time messaging with Socket.IO
- 📷 Image uploads with Cloudinary
- 🔔 Sound notifications
- 👥 User presence (online/offline status)
- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 🔒 Security with Arcjet
- 📧 Email notifications with Resend

## Project Structure

```
ChatAPP/
├── backend/           # Express.js backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   ├── lib/          # Utilities and configs
│   │   └── server.js     # Entry point
│   └── .env           # Backend environment variables
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Zustand state management
│   │   └── lib/          # Utilities
│   └── vite.config.js # Vite configuration
└── package.json       # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check auth status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users
- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/send/:userId` - Send message to user

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running (if using local)
- Check your `MONGO_URI` in `.env`
- Verify network access in MongoDB Atlas (if using cloud)

### Port Already in Use
- Change `PORT` in `backend/.env` to a different port
- Or kill the process using the port:
  ```bash
  # Find process on port 3000
  lsof -ti:3000
  # Kill the process
  kill -9 <PID>
  ```

### CORS Errors
- Ensure `CLIENT_URL` in `backend/.env` matches your frontend URL
- Check that credentials are properly configured in axios

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm install
cd backend && npm install
cd ../frontend && npm install
```

## Optional Services Setup

### Cloudinary (Image Uploads)
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret
3. Update in `backend/.env`

### Resend (Email Notifications)
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Update `RESEND_API_KEY` in `backend/.env`

### Arcjet (Security)
1. Sign up at [Arcjet](https://arcjet.com/)
2. Get your API key
3. Update `ARCJET_KEY` in `backend/.env`

## Development Tips

- The app uses hot reloading in development mode
- Backend uses nodemon for auto-restart
- Frontend uses Vite for fast HMR
- Socket.IO provides real-time communication

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
