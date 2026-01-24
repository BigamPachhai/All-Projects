#!/bin/bash

# Start both backend and frontend servers
echo "🚀 Starting ChatGPT Clone Application..."

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup INT TERM

# Start backend server
echo "📡 Starting backend server on port 4000..."
cd backend
npm run dev &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting frontend server on port 5173..."
cd ../client
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Servers started!"
echo "   Backend:  http://localhost:4000"
echo "   Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait
