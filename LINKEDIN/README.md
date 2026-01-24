# LinkedIn Clone - Full Stack Application ✨

A full-stack LinkedIn clone built with the MERN stack (MongoDB, Express, React, Node.js).

![Demo App](/frontend/public/screenshot-for-readme.png)

[Video Tutorial on Youtube](https://youtu.be/Ycg48pVp3SU)

## 🚀 Features

- � **Authentication System** - JWT-based auth with secure login/signup
- � **User Profiles** - Customizable profiles with bio, experience, education, and skills
- 📝 **Posts** - Create, edit, delete posts with image uploads
- 💬 **Comments & Likes** - Engage with posts through comments and likes
- 🤝 **Connections** - Send, accept, and reject connection requests
- 🔔 **Notifications** - Real-time notifications for interactions
- ✉️ **Email Integration** - Welcome emails and notification emails via Mailtrap
- 🖼️ **Image Uploads** - Profile pictures, banners, and post images via Cloudinary
- 👥 **User Suggestions** - Discover and connect with new users
- 📰 **News Feed** - Smart feed algorithm showing relevant posts
- 🎨 **Modern UI** - Beautiful design with TailwindCSS and DaisyUI

## 🛠️ Tech Stack

### Backend

- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (Image storage)
- Mailtrap (Email service)
- bcryptjs (Password hashing)

### Frontend

- React 18
- React Router
- TanStack Query (React Query)
- Axios
- TailwindCSS & DaisyUI
- Vite
- Lucide React (Icons)

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Environment Variables (.env file)

Your `.env` file is already configured with:

```bash
PORT=3000
MONGO_URI=mongodb+srv://admin:admin@cluster0.8dq1cjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=fejhfhkhskhkshlkahkaaknak
NODE_ENV=development

MAILTRAP_TOKEN=5010618750df289c16ddea92a86905d0
EMAIL_FROM=bigampachhai2@gmail.com
EMAIL_FROM_NAME=Bigam Pachhai

CLOUDINARY_API_KEY=823611118981939
CLOUDINARY_API_SECRET=7AkBYCuugWF4QZX-IVJC8HoBmlI
CLOUDINARY_CLOUD_NAME=dgm34bn8y

CLIENT_URL=http://localhost:5173
```

> ⚠️ **Important**: Keep these credentials private and don't commit the `.env` file to version control.

### 3. Run the Application

**Option A: Development Mode (Recommended)**

Terminal 1 - Start Backend:

```bash
npm run dev
```

Backend runs on: http://localhost:3000

Terminal 2 - Start Frontend:

```bash
cd frontend
npm run dev
```

Frontend runs on: http://localhost:5173

**Then open**: http://localhost:5173 in your browser

**Option B: Production Mode**

```bash
npm run build
NODE_ENV=production npm start
```

Access at: http://localhost:3000

## 🧪 Testing the App

1. **Sign Up** - Create a new account
2. **Check Mailtrap** - View welcome email in your Mailtrap inbox
3. **Complete Profile** - Add experience, education, skills
4. **Create Post** - Share posts with/without images
5. **Connect** - Send and accept connection requests
6. **Engage** - Like and comment on posts

## 📁 Project Structure

```
LINKEDIN/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── lib/            # Utilities (DB, Cloudinary, Mailtrap)
│   ├── emails/         # Email templates and handlers
│   └── server.js       # Express server
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── lib/        # Axios config
│   │   └── utils/      # Helper functions
│   └── public/         # Static assets
└── package.json
```

## 🔌 API Endpoints

### Authentication

- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get current user

### Users

- `GET /api/v1/users/suggestions` - Get suggested connections
- `GET /api/v1/users/:username` - Get user by username
- `PUT /api/v1/users/profile` - Update user profile

### Posts

- `GET /api/v1/posts` - Get all posts
- `POST /api/v1/posts/create` - Create new post
- `DELETE /api/v1/posts/delete/:id` - Delete post
- `POST /api/v1/posts/:id/comment` - Add comment
- `POST /api/v1/posts/:id/like` - Like/unlike post

### Connections

- `POST /api/v1/connections/request/:userId` - Send connection request
- `PUT /api/v1/connections/accept/:requestId` - Accept request
- `PUT /api/v1/connections/reject/:requestId` - Reject request
- `GET /api/v1/connections/requests` - Get pending requests
- `GET /api/v1/connections` - Get all connections

### Notifications

- `GET /api/v1/notifications` - Get all notifications
- `PUT /api/v1/notifications/:id/read` - Mark as read
- `DELETE /api/v1/notifications/:id` - Delete notification

## 🐛 Troubleshooting

**MongoDB Connection Error:**

- Verify credentials in `.env`
- Check network access in MongoDB Atlas
- Ensure IP is whitelisted

**Port Already in Use:**

```bash
lsof -ti:3000 | xargs kill -9
```

**Cloudinary Upload Issues:**

- Verify API credentials
- Check quota limits

**Email Not Sending:**

- Verify Mailtrap token
- Check Mailtrap inbox

## 📚 Resources

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary](https://cloudinary.com/)
- [Mailtrap](https://mailtrap.io/)

## 📄 License

ISC License

---

Made with ❤️ by Bigam Pachhai
