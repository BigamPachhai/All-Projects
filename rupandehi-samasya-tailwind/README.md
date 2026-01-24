# Rupandehi Samasya Portal (CodeFest)

Full-stack MERN app for reporting and managing local problems for Rupandehi district (Nepal).

- Frontend: React + Vite + **Tailwind CSS v4** (via `@tailwindcss/vite`)
- Backend: Node.js + Express + MongoDB + JWT auth
- AI features: OpenAI (optional)
- Deploy frontend on Vercel, backend on something like Render/Railway/VPS.

## Quick start

### Backend

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Fill `.env` with:

```env
MONGODB_URI=mongodb://localhost:27017/rupandehi_samasya_portal
JWT_SECRET=change_me
CLIENT_URL=http://localhost:5173

# Optional but recommended
OPENAI_API_KEY=your_openai_key_here
OPENAI_MODEL_ID=gpt-4o-mini

# Google sign-in
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
```

### Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

`.env` content:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
```

Then open http://localhost:5173 in your browser.
