#!/bin/bash

echo "🔍 Checking project readiness..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
if command -v node &> /dev/null; then
    echo -e "${GREEN}✅ Node.js installed:${NC} $(node --version)"
else
    echo -e "${RED}❌ Node.js not installed${NC}"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    echo -e "${GREEN}✅ npm installed:${NC} $(npm --version)"
else
    echo -e "${RED}❌ npm not installed${NC}"
    exit 1
fi

echo ""

# Check backend dependencies
if [ -d "backend/node_modules" ]; then
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
else
    echo -e "${RED}❌ Backend dependencies NOT installed${NC}"
    echo -e "${YELLOW}   Run: cd backend && npm install${NC}"
fi

# Check client dependencies
if [ -d "client/node_modules" ]; then
    echo -e "${GREEN}✅ Client dependencies installed${NC}"
else
    echo -e "${RED}❌ Client dependencies NOT installed${NC}"
    echo -e "${YELLOW}   Run: cd client && npm install${NC}"
fi

echo ""

# Check backend .env
if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✅ Backend .env file exists${NC}"
    
    # Check for required variables
    if grep -q "MONGO=" backend/.env && \
       grep -q "CLERK_SECRET_KEY=" backend/.env && \
       grep -q "IMAGE_KIT_PRIVATE_KEY=" backend/.env; then
        echo -e "${GREEN}   ✅ Required environment variables present${NC}"
    else
        echo -e "${YELLOW}   ⚠️  Some environment variables may be missing${NC}"
    fi
else
    echo -e "${RED}❌ Backend .env file missing${NC}"
fi

# Check client .env
if [ -f "client/.env" ]; then
    echo -e "${GREEN}✅ Client .env file exists${NC}"
    
    # Check for required variables
    if grep -q "VITE_CLERK_PUBLISHABLE_KEY=" client/.env && \
       grep -q "VITE_GEMINI_PUBLIC_KEY=" client/.env && \
       grep -q "VITE_API_URL=" client/.env; then
        echo -e "${GREEN}   ✅ Required environment variables present${NC}"
    else
        echo -e "${YELLOW}   ⚠️  Some environment variables may be missing${NC}"
    fi
else
    echo -e "${RED}❌ Client .env file missing${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}🎉 Project is ready!${NC}"
echo ""
echo "To start the application:"
echo ""
echo -e "${YELLOW}Terminal 1:${NC}"
echo "  cd backend && npm run dev"
echo ""
echo -e "${YELLOW}Terminal 2:${NC}"
echo "  cd client && npm run dev"
echo ""
echo "Or simply run:"
echo "  ./start-dev.sh"
echo ""
echo "Then open: http://localhost:5173"
echo ""
