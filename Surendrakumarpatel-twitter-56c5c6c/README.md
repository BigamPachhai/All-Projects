# Twitter Clone - Full Stack Application

A full-stack Twitter clone built with React, Redux, Node.js, Express, and MongoDB.

## 🚀 Features

- User authentication (Register/Login)
- Create, read, and delete tweets
- User profiles
- Follow/Unfollow users
- Real-time feed updates

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- npm or yarn

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Surendrakumarpatel-twitter-56c5c6c
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Update .env with your credentials:
# MONGO_URI=mongodb://localhost:27017/twitterclone (or your MongoDB Atlas URI)
# PORT=8080
# TOKEN_SECRET=your_secret_jwt_key_here

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:8080`

### 3. Frontend Setup

```bash
cd frontend/twitterclone

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# The default configuration should work if backend is running on port 8080

# Start the frontend development server
npm run dev
# or
npm start
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
backend/
├── config/
│   ├── auth.js          # JWT authentication middleware
│   └── database.js      # MongoDB connection
├── controllers/
│   ├── tweetController.js
│   └── userController.js
├── models/
│   ├── tweetSchema.js
│   └── userSchema.js
├── routes/
│   ├── tweetRoute.js
│   └── userRoute.js
├── index.js             # Entry point
└── .env                 # Environment variables

frontend/twitterclone/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── redux/
│   └── utils/
├── public/
└── .env                 # Environment variables
```

## 🔐 Environment Variables

### Backend (.env)

```
MONGO_URI=mongodb://localhost:27017/twitterclone
PORT=8080
TOKEN_SECRET=your_jwt_secret_key
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:8080
```

## 🛠️ Available Scripts

### Backend

- `npm run dev` - Start backend in development mode with nodemon
- `npm start` - Start backend in production mode

### Frontend

- `npm start` - Start React development server
- `npm run dev` - Start React development server (alias)
- `npm run build` - Build for production
- `npm test` - Run tests

## 🗄️ Database Setup

Make sure MongoDB is running on your machine or use MongoDB Atlas:

**Local MongoDB:**

```bash
# Start MongoDB service (macOS)
brew services start mongodb-community

# Or manually
mongod
```

**MongoDB Atlas:**

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGO_URI` in backend `.env` file

## 🚦 Running the Application

1. Start MongoDB (if running locally)
2. Start the backend server: `cd backend && npm run dev`
3. Start the frontend: `cd frontend/twitterclone && npm run dev`
4. Open `http://localhost:3000` in your browser

## 🔧 Troubleshooting

**Issue: CORS errors**

- Make sure the backend CORS configuration matches your frontend URL
- Default is set to `http://localhost:3000`

**Issue: Database connection failed**

- Verify MongoDB is running
- Check your `MONGO_URI` in the backend `.env` file
- Ensure your IP is whitelisted (if using MongoDB Atlas)

**Issue: JWT authentication errors**

- Make sure `TOKEN_SECRET` is set in backend `.env`
- Clear browser cookies and try logging in again

## 📝 License

This project is open source and available under the MIT License.
