# 🚀 Quick Command Reference

## Starting the Application

### Method 1: One-Command Start (Recommended)

```bash
./start-dev.sh
```

### Method 2: Separate Terminals

```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

## Common Commands

### Installation

```bash
# Install all dependencies
npm install && cd frontend && npm install && cd ..

# Install backend only
npm install

# Install frontend only
cd frontend && npm install
```

### Development

```bash
# Start backend (nodemon - auto-restart)
npm run dev

# Start frontend (Vite)
cd frontend && npm run dev

# View backend logs
npm run dev

# Build frontend for production
npm run build
```

### Production

```bash
# Build and start production server
npm run build
NODE_ENV=production npm start
```

### Database

```bash
# MongoDB shell (if using local MongoDB)
mongosh
mongosh "mongodb://localhost:27017/linkedin-clone"

# Import data
mongoimport --db linkedin-clone --collection users --file users.json
```

### Port Management

```bash
# Kill process on port 3000 (backend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9

# Find process using port
lsof -i :3000
```

### Dependency Management

```bash
# Update all dependencies
npm update
cd frontend && npm update

# Add new backend dependency
npm install package-name

# Add new frontend dependency
cd frontend && npm install package-name

# Remove dependency
npm uninstall package-name
```

### Git Commands

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Your message"

# Push to remote
git remote add origin <your-repo-url>
git push -u origin main
```

### Debugging

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Verify environment variables
cat .env

# Test MongoDB connection
node -e "require('dotenv').config(); console.log(process.env.MONGO_URI)"

# Check running processes
ps aux | grep node

# View logs in real-time
tail -f logs/app.log
```

### Testing API Endpoints

```bash
# Health check
curl http://localhost:3000

# Get current user (with auth)
curl http://localhost:3000/api/v1/auth/me \
  -H "Cookie: jwt=YOUR_JWT_TOKEN"

# Sign up
curl -X POST http://localhost:3000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","username":"testuser","email":"test@test.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

### Environment Management

```bash
# Copy example env file
cp .env.example .env

# View environment variables (be careful in production!)
printenv | grep MONGO

# Set environment variable temporarily
export NODE_ENV=production
npm start
```

### Build & Deployment

```bash
# Build frontend
cd frontend && npm run build

# Preview production build locally
cd frontend && npm run preview

# Full production build
npm run build

# Start production server
NODE_ENV=production npm start
```

### Maintenance

```bash
# Clean node_modules
rm -rf node_modules
rm -rf frontend/node_modules

# Clean and reinstall
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm install
cd frontend && npm install

# Clear npm cache
npm cache clean --force
```

### Monitoring

```bash
# Watch file changes
watch -n 1 'ls -lh backend/'

# Monitor CPU/Memory
top | grep node

# Check disk space
df -h
```

## Environment Variables Quick Reference

```bash
PORT=3000                                    # Backend server port
MONGO_URI=mongodb://...                      # MongoDB connection string
JWT_SECRET=your_secret                       # JWT signing key
NODE_ENV=development                         # Environment (development/production)
MAILTRAP_TOKEN=your_token                    # Mailtrap API token
EMAIL_FROM=email@example.com                 # From email address
EMAIL_FROM_NAME=Your Name                    # From name
CLOUDINARY_CLOUD_NAME=your_cloud             # Cloudinary cloud name
CLOUDINARY_API_KEY=your_key                  # Cloudinary API key
CLOUDINARY_API_SECRET=your_secret            # Cloudinary API secret
CLIENT_URL=http://localhost:5173             # Frontend URL
```

## URLs Quick Reference

- **Frontend Dev:** http://localhost:5173
- **Backend API:** http://localhost:3000/api/v1
- **Mailtrap:** https://mailtrap.io/inboxes
- **Cloudinary:** https://cloudinary.com/console
- **MongoDB Atlas:** https://cloud.mongodb.com

## Troubleshooting Commands

```bash
# Check if ports are available
lsof -i :3000
lsof -i :5173

# Verify MongoDB connection
node -p "require('mongoose').connect(process.env.MONGO_URI).then(() => 'Connected!').catch(e => e.message)"

# Test backend server
curl -I http://localhost:3000

# Check frontend build
cd frontend && npm run build && ls -lh dist/

# Verify environment file
test -f .env && echo "✅ .env exists" || echo "❌ .env missing"
```

## Quick Tips

- Always run `npm install` after pulling new changes
- Keep `.env` file secret and never commit it
- Use `npm run dev` (nodemon) for backend development
- Frontend hot-reloads automatically with Vite
- Check browser console for frontend errors
- Check terminal for backend errors
- Mailtrap catches all emails in development
- Clear browser cache if login issues persist

---

For detailed instructions, see `SETUP_GUIDE.md` or `START_HERE.md`
