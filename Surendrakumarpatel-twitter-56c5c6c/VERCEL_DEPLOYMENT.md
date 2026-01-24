# Vercel Deployment Guide

This guide will help you deploy your Twitter Clone application to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Backend deployed on a platform like Railway, Render, or Heroku (see Backend Deployment section)

## 🚀 Deployment Steps

### 1. Deploy Backend First

Before deploying the frontend, you need to deploy your backend API. Here are recommended platforms:

#### Option A: Railway (Recommended)
1. Sign up at [railway.app](https://railway.app)
2. Create a new project
3. Connect your GitHub repository
4. Add a new service from GitHub and select your backend folder
5. Add environment variables:
   - `MONGO_URI` - Your MongoDB connection string
   - `PORT` - Usually 8080 or let Railway assign one
   - `TOKEN_SECRET` - Your JWT secret key
   - `FRONTEND_URL` - Your Vercel frontend URL (you'll update this after frontend deployment)
6. Deploy and copy the backend URL

#### Option B: Render
1. Sign up at [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set root directory to `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variables (same as Railway)
8. Deploy and copy the backend URL

### 2. Deploy Frontend to Vercel

#### Step 1: Prepare Your Repository
1. Make sure all changes are committed to GitHub
2. Ensure `vercel.json` is in the `frontend/twitterclone` directory

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend/twitterclone`
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `build` (should be auto-detected)
   - **Install Command**: `npm install`

#### Step 3: Add Environment Variables
In the Vercel project settings, add:
- `REACT_APP_API_URL` - Your backend API URL (from step 1)
  - Example: `https://your-backend.railway.app` or `https://your-backend.onrender.com`

#### Step 4: Update Backend CORS
After getting your Vercel frontend URL (e.g., `https://your-app.vercel.app`):
1. Go to your backend deployment platform
2. Update the `FRONTEND_URL` environment variable to your Vercel URL
3. Redeploy the backend

#### Step 5: Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at `https://your-app.vercel.app`

## 🔧 Environment Variables Summary

### Frontend (Vercel)
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (Railway/Render/etc.)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/twitterclone
PORT=8080
TOKEN_SECRET=your_strong_jwt_secret_here
FRONTEND_URL=https://your-app.vercel.app
```

## 🔍 Troubleshooting

### CORS Errors
- Ensure `FRONTEND_URL` in backend matches your Vercel URL exactly
- Include protocol (https://) in the URL
- Redeploy backend after updating CORS settings

### API Connection Issues
- Verify `REACT_APP_API_URL` in Vercel environment variables
- Check that backend is running and accessible
- Ensure backend URL doesn't have trailing slash

### Build Failures
- Check Vercel build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Cookie/Session Issues
- Ensure `withCredentials: true` is set in axios requests (already configured)
- Backend must have proper CORS credentials configuration
- Cookies work on same domain, may need cookie domain configuration

## 📝 Notes

- Vercel automatically provides HTTPS
- Frontend will be served from a CDN globally
- Each push to main branch triggers automatic deployment
- Preview deployments are created for pull requests

## 🔄 Continuous Deployment

Once set up, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Run builds automatically

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)

