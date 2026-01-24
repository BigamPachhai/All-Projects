#!/bin/bash

# LinkedIn Clone - Development Startup Script
# This script starts both backend and frontend servers

echo "🚀 Starting LinkedIn Clone..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    npm install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo ""
echo "✅ Dependencies installed!"
echo ""
echo "🔧 Starting servers..."
echo "   - Backend: http://localhost:3000"
echo "   - Frontend: http://localhost:5173"
echo ""
echo "⚠️  Keep this terminal open while developing"
echo "   Press Ctrl+C to stop all servers"
echo ""

# Start backend in background
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend in background
cd frontend && npm run dev &
FRONTEND_PID=$!

# Wait for user to press Ctrl+C
trap "echo ''; echo '🛑 Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" INT

# Keep script running
wait
