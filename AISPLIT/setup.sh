#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   AI Splitwise Clone - Quick Setup    ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ .env.local file not found!${NC}"
    echo -e "${YELLOW}Please create .env.local file with required environment variables.${NC}"
    echo -e "${YELLOW}See .env.example for reference.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ .env.local file found${NC}"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
    else
        echo -e "${RED}❌ Failed to install dependencies${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi

echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${YELLOW}⚠️  IMPORTANT: Before running the app${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}1. Make sure to fill in your .env.local file with:${NC}"
echo -e "   - Convex credentials (dashboard.convex.dev)"
echo -e "   - Clerk credentials (dashboard.clerk.com)"
echo -e "   - Resend API key (resend.com)"
echo -e "   - Gemini API key (makersuite.google.com)"
echo ""
echo -e "${YELLOW}2. In a separate terminal, run:${NC}"
echo -e "   ${GREEN}npx convex dev${NC}"
echo ""
echo -e "${YELLOW}3. Then start the development server:${NC}"
echo -e "   ${GREEN}npm run dev${NC}"
echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${GREEN}Setup complete! 🎉${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
