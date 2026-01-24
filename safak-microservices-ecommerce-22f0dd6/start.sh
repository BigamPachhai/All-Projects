#!/bin/bash

# E-Commerce Microservices Quick Start Script

echo "🚀 Starting E-Commerce Microservices Setup..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env files exist
echo "📋 Checking environment files..."
ENV_FILES=(
  "apps/auth-service/.env"
  "apps/product-service/.env"
  "apps/payment-service/.env"
  "apps/order-service/.env"
  "apps/email-service/.env"
  "apps/client/.env.local"
  "apps/admin/.env.local"
)

MISSING_ENV=false
for file in "${ENV_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo -e "${RED}❌ Missing: $file${NC}"
    MISSING_ENV=true
  else
    echo -e "${GREEN}✅ Found: $file${NC}"
  fi
done

if [ "$MISSING_ENV" = true ]; then
  echo -e "${YELLOW}⚠️  Please configure your .env files before proceeding.${NC}"
  echo "See SETUP.md for detailed instructions."
  exit 1
fi

echo ""
echo "✅ All environment files found!"
echo ""

# Check if Docker is running
echo "🐳 Checking Docker..."
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}❌ Docker is not running. Please start Docker Desktop.${NC}"
  exit 1
fi
echo -e "${GREEN}✅ Docker is running${NC}"
echo ""

# Check if Kafka is running
echo "📡 Checking Kafka..."
if docker ps | grep -q kafka-broker; then
  echo -e "${GREEN}✅ Kafka is already running${NC}"
else
  echo "🔄 Starting Kafka cluster..."
  cd packages/kafka
  docker-compose up -d
  cd ../..
  echo -e "${GREEN}✅ Kafka started${NC}"
fi
echo ""

# Generate Prisma Client
echo "🗄️  Generating Prisma Client..."
cd packages/product-db
npx prisma generate > /dev/null 2>&1
cd ../..
echo -e "${GREEN}✅ Prisma Client generated${NC}"
echo ""

# Check if PostgreSQL is accessible
echo "🐘 Checking PostgreSQL..."
if command -v psql > /dev/null 2>&1; then
  echo -e "${GREEN}✅ PostgreSQL client found${NC}"
  echo -e "${YELLOW}⚠️  Make sure your PostgreSQL database is running and matches your .env configuration${NC}"
else
  echo -e "${YELLOW}⚠️  PostgreSQL client not found. Make sure PostgreSQL is installed and configured.${NC}"
fi
echo ""

# Check if MongoDB is accessible
echo "🍃 Checking MongoDB..."
if command -v mongosh > /dev/null 2>&1 || command -v mongo > /dev/null 2>&1; then
  echo -e "${GREEN}✅ MongoDB client found${NC}"
  echo -e "${YELLOW}⚠️  Make sure MongoDB is running on localhost:27017${NC}"
else
  echo -e "${YELLOW}⚠️  MongoDB client not found. Make sure MongoDB is installed and running.${NC}"
fi
echo ""

echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "  1. Make sure PostgreSQL is running with the database 'ecommerce_products'"
echo "  2. Make sure MongoDB is running on localhost:27017"
echo "  3. Run 'npx pnpm dev' to start all services"
echo ""
echo "📚 For detailed instructions, see SETUP.md"
echo ""
