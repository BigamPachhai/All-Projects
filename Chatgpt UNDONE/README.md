# ChatGPT Clone - Full Stack Application

A full-stack AI chat application built with React, Express, MongoDB, and Google Gemini AI.

## Features

- 🤖 AI-powered chat using Google Gemini
- 🔐 User authentication with Clerk
- 💬 Multiple chat conversations
- 📸 Image upload support with ImageKit
- 💾 Chat history storage in MongoDB
- 🎨 Modern and responsive UI

## Tech Stack

### Frontend

- React 18
- Vite
- React Router
- Clerk (Authentication)
- TanStack Query
- Google Generative AI (Gemini)
- ImageKit React

### Backend

- Node.js & Express
- MongoDB & Mongoose
- Clerk SDK
- ImageKit
- CORS

## Prerequisites

Before running this application, you need to set up accounts and get API keys from:

1. **MongoDB** - [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

   - Create a free cluster
   - Get your connection string

2. **Clerk** - [https://clerk.com](https://clerk.com)

   - Create an application
   - Get your Publishable Key and Secret Key

3. **Google AI Studio** - [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

   - Get your Gemini API key

4. **ImageKit** - [https://imagekit.io](https://imagekit.io)
   - Create an account
   - Get your URL Endpoint, Public Key, and Private Key

## Installation

### 1. Clone the repository

\`\`\`bash
cd "FULL STACK PROJECTS/Chatgpt UNDONE"
\`\`\`

### 2. Install Backend Dependencies

\`\`\`bash
cd backend
npm install
\`\`\`

### 3. Install Frontend Dependencies

\`\`\`bash
cd ../client
npm install
\`\`\`

### 4. Configure Environment Variables

#### Backend (.env)

Navigate to the `backend` folder and create a `.env` file:

\`\`\`bash
cd backend
cp .env.example .env
\`\`\`

Edit the `.env` file with your actual credentials:

\`\`\`env
PORT=3000
MONGO=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
\`\`\`

#### Frontend (.env)

Navigate to the `client` folder and create a `.env` file:

\`\`\`bash
cd ../client
cp .env.example .env
\`\`\`

Edit the `.env` file with your actual credentials:

\`\`\`env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_GEMINI_PUBLIC_KEY=your_gemini_api_key
VITE_API_URL=http://localhost:3000
VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
\`\`\`

## Running the Application

### Development Mode

You need to run both the backend and frontend servers.

#### Terminal 1 - Backend Server

\`\`\`bash
cd backend
npm run dev
\`\`\`

The backend will run on [http://localhost:3000](http://localhost:3000)

#### Terminal 2 - Frontend Server

\`\`\`bash
cd client
npm run dev
\`\`\`

The frontend will run on [http://localhost:5173](http://localhost:5173)

### Production Build

#### Build the frontend:

\`\`\`bash
cd client
npm run build
\`\`\`

#### Start the backend (serves both API and frontend):

\`\`\`bash
cd backend
npm start
\`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── backend/
│ ├── models/ # MongoDB models
│ ├── index.js # Express server
│ ├── package.json
│ └── .env # Backend environment variables
│
├── client/
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── layouts/ # Layout components
│ │ ├── routes/ # Page components
│ │ ├── lib/ # Utilities (Gemini config)
│ │ └── main.jsx # App entry point
│ ├── package.json
│ └── .env # Frontend environment variables
│
└── README.md
\`\`\`

## API Endpoints

- `GET /api/upload` - Get ImageKit authentication parameters
- `POST /api/chats` - Create a new chat
- `GET /api/userchats` - Get all user chats
- `GET /api/chats/:id` - Get specific chat by ID
- `PUT /api/chats/:id` - Update chat with new messages

## Troubleshooting

### MongoDB Connection Issues

- Ensure your IP address is whitelisted in MongoDB Atlas
- Check your connection string format
- Verify database user permissions

### Clerk Authentication Issues

- Verify your Clerk keys match between frontend and backend
- Check that your application URL is configured in Clerk dashboard
- Ensure the same Publishable Key is used in both .env files

### Gemini API Issues

- Verify your API key is active
- Check your API quota limits
- Ensure you're using a valid model name

### Port Already in Use

If port 3000 or 5173 is already in use, change the PORT in backend/.env or run frontend on a different port.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on the repository.
