# 🚀 Deployment Guide

## Deployment Options

This guide covers deployment to popular platforms.

---

## Option 1: Render (Recommended - Free Tier Available)

### Backend Deployment

1. **Create a Render Account** at [render.com](https://render.com)

2. **Create a New Web Service**
   - Connect your GitHub repository
   - Select the `backend` folder as root directory
   - Use the following settings:

```yaml
Name: chatapp-backend
Environment: Node
Build Command: npm install
Start Command: npm start
```

3. **Set Environment Variables** in Render dashboard:
```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
NODE_ENV=production
CLIENT_URL=https://your-frontend-url.onrender.com
RESEND_API_KEY=your_resend_key
EMAIL_FROM=your_email
EMAIL_FROM_NAME=ChatApp
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=production
```

### Frontend Deployment

1. **Create Another Web Service** for frontend
   - Select the `frontend` folder
   - Use these settings:

```yaml
Name: chatapp-frontend
Environment: Static Site
Build Command: npm install && npm run build
Publish Directory: dist
```

2. **Set Environment Variable**:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

3. **Update Backend .env** with frontend URL:
```
CLIENT_URL=https://your-frontend-url.onrender.com
```

---

## Option 2: Vercel (Frontend) + Railway (Backend)

### Backend on Railway

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Set root directory to `backend`
4. Add all environment variables
5. Deploy!

### Frontend on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `frontend`
4. Add environment variable:
   ```
   VITE_API_URL=your-railway-backend-url
   ```
5. Deploy!

---

## Option 3: Heroku

### Prerequisites
```bash
# Install Heroku CLI
brew tap heroku/brew && brew install heroku
```

### Backend Deployment

```bash
# Login to Heroku
heroku login

# Create app
heroku create chatapp-backend

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret
heroku config:set NODE_ENV=production
heroku config:set CLIENT_URL=your_frontend_url
# ... (set all other env vars)

# Deploy
cd backend
git subtree push --prefix backend heroku main
```

### Frontend Deployment

```bash
# Create frontend app
heroku create chatapp-frontend

# Set buildpack for static site
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static

# Add static.json in frontend/
echo '{"root": "dist"}' > frontend/static.json

# Deploy
git subtree push --prefix frontend heroku main
```

---

## Option 4: Docker Deployment

### Docker Compose

Create `docker-compose.yml` in root:

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    env_file:
      - ./backend/.env
    depends_on:
      - mongodb

  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

Create `backend/Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Create `frontend/Dockerfile`:

```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Deploy:
```bash
docker-compose up -d
```

---

## Option 5: DigitalOcean App Platform

1. Create account at [digitalocean.com](https://digitalocean.com)
2. Click "Create" → "Apps"
3. Connect GitHub repository
4. Add two components:
   - **Backend Service**: Node.js app from `/backend`
   - **Frontend Static Site**: from `/frontend`
5. Set environment variables
6. Deploy!

---

## Pre-Deployment Checklist

- [ ] Update `JWT_SECRET` to a strong random string
- [ ] Set `NODE_ENV=production`
- [ ] Configure MongoDB Atlas (allow all IPs or specific ones)
- [ ] Update `CLIENT_URL` to your frontend domain
- [ ] Test all environment variables
- [ ] Enable CORS for your frontend domain
- [ ] Set up SSL/HTTPS (most platforms do this automatically)
- [ ] Test Socket.IO connection in production
- [ ] Configure Cloudinary for production
- [ ] Set up monitoring/logging

---

## MongoDB Atlas Setup (Required)

1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get connection string and update `MONGO_URI`

---

## Environment Variables Security

**NEVER commit `.env` files to Git!**

Always use platform-specific environment variable managers:
- Render: Environment Variables section
- Vercel: Environment Variables in project settings
- Heroku: Config Vars
- Railway: Variables tab

---

## Post-Deployment

1. Test all features:
   - Sign up / Login
   - Send messages
   - Upload images
   - Check real-time updates
   
2. Monitor logs for errors

3. Set up analytics (optional)

4. Configure domain name (optional)

---

## Troubleshooting Deployment

### Socket.IO Not Working
- Ensure WebSocket is enabled on your hosting platform
- Check CORS settings
- Verify `CLIENT_URL` matches frontend domain

### Images Not Uploading
- Verify Cloudinary credentials
- Check file size limits on hosting platform

### Database Connection Issues
- Whitelist hosting platform IPs in MongoDB Atlas
- Verify connection string format
- Check database user permissions

### CORS Errors
- Update `CLIENT_URL` in backend `.env`
- Verify CORS middleware configuration

---

## Cost Estimates (Free Tiers Available)

| Service | Free Tier | Paid |
|---------|-----------|------|
| Render | 750 hours/month | $7/month |
| Vercel | 100GB bandwidth | $20/month |
| Railway | $5 credit | Pay as you go |
| MongoDB Atlas | 512MB storage | $9/month |
| Cloudinary | 25GB storage | $89/month |

---

## Support

For deployment issues, check:
- Platform-specific documentation
- GitHub Issues
- Community forums

---

**Good luck with your deployment! 🚀**
