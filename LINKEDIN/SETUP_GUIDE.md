# Quick Setup Guide

## Step-by-Step Setup Instructions

### 1. Install Node.js Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Configure Environment Variables

The `.env` file has been created for you. Update the following values:

#### Required Configurations:

**MongoDB:**

- For local MongoDB: `MONGO_URI=mongodb://localhost:27017/linkedin-clone`
- For MongoDB Atlas:
  1. Sign up at https://www.mongodb.com/cloud/atlas
  2. Create a cluster
  3. Get connection string
  4. Replace in `.env`

**JWT Secret:**
Generate a secure secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and replace `JWT_SECRET` value in `.env`

**Cloudinary (for image uploads):**

1. Sign up at https://cloudinary.com/
2. Go to Dashboard
3. Copy: Cloud Name, API Key, API Secret
4. Update in `.env`:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

**Mailtrap (for emails):**

1. Sign up at https://mailtrap.io/
2. Go to Email Testing → Inboxes
3. Select your inbox → API tab
4. Copy API Token
5. Update `MAILTRAP_TOKEN` in `.env`

### 3. Start MongoDB

**Local MongoDB:**

```bash
# macOS
brew services start mongodb-community

# Or start manually
mongod --config /usr/local/etc/mongod.conf
```

**MongoDB Atlas:**

- No local installation needed
- Just ensure your connection string is correct

### 4. Run the Application

**Option A: Development (Recommended for development)**

Terminal 1 - Backend:

```bash
npm run dev
```

Terminal 2 - Frontend:

```bash
cd frontend
npm run dev
```

Then open: http://localhost:5173

**Option B: Production Build**

```bash
npm run build
NODE_ENV=production npm start
```

Then open: http://localhost:3000

### 5. Test the Application

1. **Sign Up:** Create a new account
2. **Check Email:** Go to your Mailtrap inbox to see the welcome email
3. **Create Profile:** Add your experience, education, skills
4. **Create Post:** Share your first post
5. **Connect:** Send connection requests to suggested users

## Common Issues & Solutions

### "Cannot connect to MongoDB"

- ✅ Check if MongoDB is running: `brew services list` (macOS)
- ✅ Verify `MONGO_URI` in `.env` is correct
- ✅ For Atlas: Check if your IP is whitelisted

### "Port 3000 already in use"

- ✅ Change `PORT=3001` in `.env`
- ✅ Or kill the process: `lsof -ti:3000 | xargs kill -9`

### "JWT malformed" or authentication issues

- ✅ Make sure `JWT_SECRET` is set in `.env`
- ✅ Clear browser cookies and try logging in again

### Images not uploading

- ✅ Verify Cloudinary credentials in `.env`
- ✅ Check Cloudinary dashboard for quota/usage

### Emails not sending

- ✅ Verify `MAILTRAP_TOKEN` in `.env`
- ✅ Check Mailtrap inbox (sandbox - emails won't go to real addresses)

## Verification Checklist

- [ ] MongoDB is running and connected
- [ ] Backend server starts without errors (port 3000)
- [ ] Frontend dev server starts (port 5173)
- [ ] Can sign up a new user
- [ ] Welcome email appears in Mailtrap
- [ ] Can log in successfully
- [ ] Can create and view posts
- [ ] Can upload profile/banner images
- [ ] Can send connection requests

## Next Steps

Once everything is running:

1. **Customize the app:**

   - Update branding in `frontend/public/`
   - Modify email templates in `backend/emails/emailTemplates.js`

2. **Deploy to production:**

   - Backend: Railway, Render, or Heroku
   - Frontend: Vercel, Netlify
   - Database: MongoDB Atlas (already cloud-based)

3. **Add features:**
   - Direct messaging
   - Job postings
   - Video posts
   - Advanced search

## Quick Commands Reference

```bash
# Development
npm run dev                    # Start backend (nodemon)
cd frontend && npm run dev     # Start frontend

# Production
npm run build                  # Build frontend
npm start                      # Start production server

# Database
mongosh                        # MongoDB shell
mongosh "mongodb://localhost:27017/linkedin-clone"

# Utilities
npm install                    # Install/update dependencies
npm run lint                   # Check code quality (frontend)
```

## Need Help?

- Check the main `README.md` for detailed documentation
- Review error messages in the terminal
- Check browser console for frontend errors
- Verify all environment variables are set correctly

Happy coding! 🚀
