# ❓ Frequently Asked Questions (FAQ)

## General Questions

### Q: What is this project?
**A:** ChatAPP is a full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, real-time messaging via Socket.IO, image uploads, email notifications, and more.

### Q: Is this project free to use?
**A:** Yes! This is an open-source project under the ISC license. You can use it, modify it, and deploy it for personal or commercial purposes.

### Q: What are the system requirements?
**A:** You need:
- Node.js version 20.0.0 or higher
- MongoDB (local or Atlas)
- At least 2GB RAM
- Modern web browser (Chrome, Firefox, Safari, Edge)

---

## Setup & Installation

### Q: Do I need to set up environment variables?
**A:** The backend `.env` file is already configured with working credentials. However, you should change the `JWT_SECRET` for production use.

### Q: Can I use my own MongoDB database?
**A:** Yes! Update the `MONGO_URI` in `backend/.env` with your own MongoDB connection string (local or MongoDB Atlas).

### Q: How do I run the application?
**A:** 
```bash
# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Run backend (Terminal 1)
cd backend && npm run dev

# Run frontend (Terminal 2)
cd frontend && npm run dev
```
Then open http://localhost:5173

### Q: What ports does the app use?
**A:** 
- Backend: Port 3000
- Frontend: Port 5173 (Vite dev server)

---

## Features & Functionality

### Q: Do I need Cloudinary to use the app?
**A:** Cloudinary is optional but required for image upload functionality. The app will work without it, but users won't be able to share images. Demo credentials are already provided in `.env`.

### Q: Do I need Resend for emails?
**A:** Resend is optional. It's used for sending welcome emails when users sign up. The app works without it, but email features won't function. Demo credentials are provided.

### Q: What is Arcjet and do I need it?
**A:** Arcjet provides rate limiting and security features. It's optional but recommended for production. Demo credentials are included in `.env`.

### Q: Can users video chat?
**A:** No, this version only supports text and image messages. Video chat would require additional libraries like WebRTC.

### Q: Is there a mobile app?
**A:** No native mobile app, but the web interface is responsive and works well on mobile browsers.

---

## Technical Questions

### Q: Why use Socket.IO instead of WebSockets?
**A:** Socket.IO provides:
- Automatic reconnection
- Room management
- Fallback options
- Better browser compatibility
- Built-in event system

### Q: Why Zustand over Redux?
**A:** Zustand is:
- Simpler with less boilerplate
- Smaller bundle size
- Easier to learn
- Sufficient for this app's needs

### Q: Can I use PostgreSQL instead of MongoDB?
**A:** Yes, but you'll need to:
- Change the database connection logic
- Update models to use an ORM like Sequelize or Prisma
- Modify queries throughout the codebase

### Q: Why Vite instead of Create React App?
**A:** Vite offers:
- Faster dev server startup
- Instant hot module replacement (HMR)
- Better build performance
- Modern tooling
- CRA is no longer actively maintained

---

## Deployment Questions

### Q: Where can I deploy this app for free?
**A:** Free tier options:
- **Render** - Backend & Frontend
- **Vercel** - Frontend only
- **Railway** - Backend (with free credits)
- **MongoDB Atlas** - Database (512MB free)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides.

### Q: Do I need separate deployments for backend and frontend?
**A:** In development, yes. In production, you can:
- Deploy separately (recommended for scaling)
- Build frontend and serve from backend (simpler)

### Q: How do I handle environment variables in production?
**A:** Use your hosting platform's environment variable system:
- Render: Environment Variables tab
- Vercel: Project Settings → Environment Variables
- Heroku: Config Vars
- Railway: Variables tab

### Q: What about HTTPS/SSL?
**A:** Most hosting platforms (Render, Vercel, Railway) provide automatic HTTPS. No configuration needed!

---

## Troubleshooting

### Q: Port 3000 is already in use. What do I do?
**A:** 
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or change the port in backend/.env
PORT=3001
```

### Q: I'm getting CORS errors. How do I fix this?
**A:** Ensure:
1. Both backend and frontend are running
2. `CLIENT_URL` in `backend/.env` matches your frontend URL (http://localhost:5173 in dev)
3. CORS middleware is properly configured

### Q: Messages aren't appearing in real-time. Why?
**A:** Check:
1. Socket.IO connection is established (check browser console)
2. Both users are online
3. Backend WebSocket is working
4. Firewall isn't blocking WebSocket connections

### Q: Images aren't uploading. What's wrong?
**A:** Verify:
1. Cloudinary credentials are correct in `.env`
2. Image size is under 5MB
3. Internet connection is stable
4. CLOUDINARY_CLOUD_NAME, API_KEY, and API_SECRET are all set

### Q: I'm getting "Module not found" errors
**A:** 
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json

# Reinstall
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Q: Database connection failed
**A:** Check:
1. MongoDB is running (if using local)
2. `MONGO_URI` in `.env` is correct
3. Network access is allowed in MongoDB Atlas
4. Database user credentials are correct

### Q: I can't login after signup
**A:** Verify:
1. `JWT_SECRET` is set in `.env`
2. Password meets requirements (if any)
3. Check browser console for errors
4. Clear browser cookies and try again

---

## Customization

### Q: How do I change the app theme?
**A:** The app uses DaisyUI themes. Modify `tailwind.config.js` in the frontend:
```javascript
daisyui: {
  themes: ["light", "dark", "cupcake", "dracula"],
}
```

### Q: Can I add more features?
**A:** Absolutely! The codebase is modular and easy to extend. Common additions:
- Group chats
- Voice messages
- File sharing
- Video calls
- Message reactions
- Read receipts

### Q: How do I change the logo or branding?
**A:** 
1. Replace images in `frontend/public/`
2. Update app name in components
3. Modify email templates in `backend/src/emails/emailTemplates.js`

### Q: Can I add more authentication methods (Google, Facebook, etc.)?
**A:** Yes! You'll need to:
1. Set up OAuth providers
2. Install passport.js or similar library
3. Add OAuth routes and controllers
4. Update frontend login page

---

## Performance

### Q: How many concurrent users can it handle?
**A:** Depends on your server resources. On a basic setup:
- Development: 50-100 concurrent users
- Production (1 CPU, 1GB RAM): 500-1000 users
- Scaled production: 10,000+ users

### Q: How do I improve performance?
**A:**
- Implement Redis for caching
- Use CDN for static assets
- Add database indexes
- Implement pagination
- Use load balancing
- Enable gzip compression

### Q: Is the app production-ready?
**A:** Mostly yes, but consider:
- Changing default secrets
- Adding comprehensive error handling
- Implementing logging (Winston, Morgan)
- Adding monitoring (Sentry, LogRocket)
- Setting up CI/CD
- Adding automated tests

---

## Security

### Q: Is the app secure?
**A:** Basic security is implemented:
- JWT authentication
- Password hashing (bcrypt)
- Rate limiting (Arcjet)
- CORS protection
- Input validation

### Q: Should I change the JWT_SECRET?
**A:** **YES!** Especially for production. Use a long, random string:
```bash
# Generate a secure secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Q: How do I add two-factor authentication?
**A:** You'll need to:
1. Install a 2FA library (speakeasy, otplib)
2. Add 2FA setup endpoint
3. Modify login flow
4. Update frontend UI

### Q: How are passwords stored?
**A:** Passwords are hashed using bcrypt with a salt before storing in the database. Plain text passwords are never stored.

---

## Contributing

### Q: Can I contribute to this project?
**A:** Yes! Contributions are welcome. Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Q: Where can I report bugs?
**A:** Create an issue on GitHub with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

### Q: How do I request a feature?
**A:** Open a GitHub issue with the "feature request" label. Describe:
- The feature you want
- Why it's useful
- How it might work

---

## Learning Resources

### Q: I'm new to React. Where should I start?
**A:** Resources:
- [React Official Docs](https://react.dev)
- [React Tutorial](https://react.dev/learn)
- [FreeCodeCamp React Course](https://www.freecodecamp.org)

### Q: I don't understand Socket.IO. Help?
**A:** Check out:
- [Socket.IO Documentation](https://socket.io/docs)
- [Socket.IO Tutorial](https://socket.io/get-started/chat)

### Q: Where can I learn more about the MERN stack?
**A:** Resources:
- [MongoDB University](https://university.mongodb.com)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Documentation](https://nodejs.org/en/docs)

---

## Support

### Q: Where can I get help?
**A:** 
1. Read this FAQ
2. Check [SETUP.md](./SETUP.md) and [DEVELOPMENT.md](./DEVELOPMENT.md)
3. Search existing GitHub issues
4. Create a new issue with details

### Q: Is there a community?
**A:** Check the GitHub repository for:
- Discussions
- Issues
- Pull requests
- Contributors

---

## License & Usage

### Q: Can I use this for commercial projects?
**A:** Yes! The ISC license allows commercial use.

### Q: Do I need to give credit?
**A:** Not required by the license, but appreciated!

### Q: Can I sell this?
**A:** Yes, you can sell products based on this code.

---

**Still have questions? Create an issue on GitHub!** 🚀
