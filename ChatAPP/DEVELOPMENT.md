# Development Guide

## Getting Started with Development

This guide will help you understand the codebase and start contributing.

---

## Prerequisites

- Node.js >= 20.0.0
- MongoDB (local or Atlas)
- Git
- Code editor (VS Code recommended)

---

## Project Architecture

### Backend Architecture

```
backend/
├── src/
│   ├── server.js              # Entry point, Express setup
│   ├── controllers/           # Business logic
│   │   ├── auth.controller.js # Authentication logic
│   │   └── message.controller.js # Messaging logic
│   ├── models/               # MongoDB schemas
│   │   ├── User.js           # User model
│   │   └── Message.js        # Message model
│   ├── routes/               # API endpoints
│   │   ├── auth.route.js     # Auth routes
│   │   └── message.route.js  # Message routes
│   ├── middleware/           # Express middleware
│   │   ├── auth.middleware.js    # JWT verification
│   │   ├── arcjet.middleware.js  # Rate limiting
│   │   └── socket.auth.middleware.js # Socket auth
│   ├── lib/                  # Utilities & configs
│   │   ├── db.js             # MongoDB connection
│   │   ├── socket.js         # Socket.IO setup
│   │   ├── cloudinary.js     # Image upload config
│   │   ├── resend.js         # Email service
│   │   ├── arcjet.js         # Security config
│   │   ├── env.js            # Environment variables
│   │   └── utils.js          # Helper functions
│   └── emails/               # Email templates
│       ├── emailHandlers.js  # Email sending logic
│       └── emailTemplates.js # HTML email templates
```

### Frontend Architecture

```
frontend/
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Root component with routing
│   ├── pages/                # Route pages
│   │   ├── LoginPage.jsx     # Login UI
│   │   ├── SignUpPage.jsx    # Signup UI
│   │   └── ChatPage.jsx      # Main chat interface
│   ├── components/           # Reusable components
│   │   ├── ChatContainer.jsx     # Message display
│   │   ├── ChatHeader.jsx        # Chat header
│   │   ├── ChatsList.jsx         # User list sidebar
│   │   ├── MessageInput.jsx      # Message input form
│   │   ├── ContactList.jsx       # Contact list
│   │   └── [other components]
│   ├── store/                # State management
│   │   ├── useAuthStore.js   # Auth state (Zustand)
│   │   └── useChatStore.js   # Chat state (Zustand)
│   ├── hooks/                # Custom React hooks
│   │   └── useKeyboardSound.js # Sound effects
│   └── lib/                  # Utilities
│       └── axios.js          # API client config
```

---

## Key Technologies

### Backend

**Express.js** - Web framework
- Routing
- Middleware
- Request/response handling

**MongoDB + Mongoose** - Database
- User data
- Message history
- Schema validation

**Socket.IO** - Real-time communication
- Bi-directional event-based communication
- Room management
- Online status

**JWT** - Authentication
- Stateless authentication
- Token-based auth
- Secure user sessions

**Cloudinary** - Image storage
- Image uploads
- Transformation
- CDN delivery

**Resend** - Email service
- Transactional emails
- Welcome emails
- HTML templates

**Arcjet** - Security
- Rate limiting
- DDoS protection
- Bot detection

### Frontend

**React 19** - UI library
- Component-based architecture
- Hooks for state management
- Virtual DOM

**Vite** - Build tool
- Fast HMR (Hot Module Replacement)
- Optimized builds
- Modern development experience

**Zustand** - State management
- Simple and lightweight
- No boilerplate
- TypeScript friendly

**Tailwind CSS** - Styling
- Utility-first CSS
- Responsive design
- Custom themes

**DaisyUI** - Component library
- Pre-built components
- Themes
- Tailwind plugin

**Socket.IO Client** - Real-time updates
- Connect to backend Socket.IO
- Event listeners
- Auto-reconnection

---

## Development Workflow

### 1. Setting Up Development Environment

```bash
# Clone repository
git clone <your-repo-url>
cd ChatAPP

# Install dependencies
cd backend && npm install
cd ../frontend && npm install
```

### 2. Running in Development Mode

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

### 3. Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test thoroughly

4. Commit with meaningful messages:
   ```bash
   git add .
   git commit -m "Add: new feature description"
   ```

5. Push and create PR:
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Common Development Tasks

### Adding a New API Endpoint

1. **Create route** in `backend/src/routes/`:
   ```javascript
   router.get("/new-endpoint", protectRoute, controllerFunction);
   ```

2. **Create controller** in `backend/src/controllers/`:
   ```javascript
   export const controllerFunction = async (req, res) => {
     try {
       // Your logic here
       res.status(200).json({ success: true });
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   };
   ```

3. **Test with Postman or Thunder Client**

### Adding a New UI Component

1. **Create component** in `frontend/src/components/`:
   ```jsx
   export const NewComponent = () => {
     return <div>Component content</div>;
   };
   ```

2. **Import and use** in your page:
   ```jsx
   import { NewComponent } from "../components/NewComponent";
   ```

3. **Style with Tailwind**:
   ```jsx
   <div className="flex items-center justify-center">
   ```

### Adding State Management

Using Zustand:

```javascript
import { create } from "zustand";

export const useMyStore = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
```

Usage:
```jsx
const { data, setData } = useMyStore();
```

### Adding Socket.IO Events

**Backend** (`backend/src/lib/socket.js`):
```javascript
io.on("connection", (socket) => {
  socket.on("new-event", (data) => {
    // Handle event
    io.emit("response-event", responseData);
  });
});
```

**Frontend** (in component):
```jsx
useEffect(() => {
  socket.on("response-event", (data) => {
    // Handle response
  });
  
  return () => socket.off("response-event");
}, []);
```

---

## Code Style Guide

### JavaScript/JSX

- Use ES6+ features
- Use const/let, not var
- Use arrow functions
- Use template literals
- Async/await over promises

### Naming Conventions

- **Variables**: camelCase (`userName`)
- **Functions**: camelCase (`getUserData`)
- **Components**: PascalCase (`UserProfile`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)
- **Files**: kebab-case or PascalCase

### React Best Practices

- Use functional components
- Use hooks properly
- Keep components small and focused
- Avoid prop drilling (use Zustand)
- Clean up effects properly

---

## Testing

### Manual Testing Checklist

- [ ] Sign up new user
- [ ] Login existing user
- [ ] Update profile with image
- [ ] Send text message
- [ ] Send image message
- [ ] Check real-time updates
- [ ] Test online/offline status
- [ ] Test on mobile viewport
- [ ] Test logout

### Browser Testing

Test on:
- Chrome
- Firefox
- Safari
- Mobile browsers

---

## Debugging

### Backend Debugging

1. **Console logs**:
   ```javascript
   console.log("Debug:", variable);
   ```

2. **VS Code debugger**: Use launch.json configuration

3. **MongoDB queries**: Use MongoDB Compass

### Frontend Debugging

1. **React DevTools**: Install browser extension

2. **Console logs**:
   ```javascript
   console.log("State:", state);
   ```

3. **Network tab**: Check API calls

4. **Zustand DevTools**: Add middleware

---

## Performance Optimization

### Backend

- Use database indexes
- Implement caching
- Optimize queries
- Use pagination
- Compress responses

### Frontend

- Code splitting
- Lazy loading
- Image optimization
- Memoization (useMemo, useCallback)
- Virtual scrolling for long lists

---

## Security Best Practices

- Never commit `.env` files
- Sanitize user inputs
- Use HTTPS in production
- Implement rate limiting
- Validate all data
- Use secure cookies
- Keep dependencies updated

---

## Useful Commands

```bash
# Backend
npm run dev          # Development with nodemon
npm start            # Production
npm install package  # Add dependency

# Frontend
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Run linter

# Git
git status           # Check status
git log              # View commits
git branch           # List branches
git checkout -b feat # Create branch
```

---

## Resources

- [React Docs](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com)
- [Socket.IO Docs](https://socket.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Zustand Guide](https://github.com/pmndrs/zustand)

---

## Getting Help

- Check existing issues
- Read documentation
- Ask in discussions
- Debug with console logs
- Use browser DevTools

---

**Happy Coding! 💻**
