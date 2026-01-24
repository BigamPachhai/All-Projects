#!/bin/bash

# ChatGPT Clone Setup Script
echo "🚀 Setting up ChatGPT Clone Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed successfully"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd ../client
npm install
if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo ""
echo "✅ Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Make sure MongoDB is running (local or Atlas)"
echo "2. Verify your .env files have the correct API keys:"
echo "   - backend/.env (MongoDB, Clerk, ImageKit)"
echo "   - client/.env (Clerk, Gemini, ImageKit)"
echo ""
echo "3. Start the application:"
echo "   Terminal 1: cd backend && npm run dev"
echo "   Terminal 2: cd client && npm run dev"
echo ""
echo "🌐 Application will be available at:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:4000"
