# 🚀 E-Commerce Microservices Project Setup Guide

This is a full-stack e-commerce application built with microservices architecture using Next.js, Express, Fastify, Hono, Kafka, and Turborepo.

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v9.0.0)
- **Docker** and **Docker Compose** (for Kafka)
- **PostgreSQL** (for product database)
- **MongoDB** (for order database)

## 🏗️ Project Structure

```
├── apps/
│   ├── admin/          # Admin dashboard (Next.js) - Port 3003
│   ├── client/         # Customer frontend (Next.js) - Port 3002
│   ├── auth-service/   # Authentication service (Express) - Port 8003
│   ├── product-service/# Product management (Express) - Port 8000
│   ├── payment-service/# Payment processing (Hono) - Port 8002
│   ├── order-service/  # Order management (Fastify) - Port 8001
│   └── email-service/  # Email notifications (Node.js)
├── packages/
│   ├── kafka/         # Kafka client & Docker setup
│   ├── product-db/    # Prisma schema for products
│   ├── order-db/      # MongoDB schema for orders
│   └── types/         # Shared TypeScript types
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npx pnpm@9.0.0 install
```

### 2. Configure Environment Variables

#### **Auth Service** (`apps/auth-service/.env`)

```env
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
KAFKA_BROKER=localhost:9092
```

#### **Product Service** (`apps/product-service/.env`)

```env
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce_products
KAFKA_BROKER=localhost:9092
```

#### **Payment Service** (`apps/payment-service/.env`)

```env
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here
KAFKA_BROKER=localhost:9092
```

#### **Order Service** (`apps/order-service/.env`)

```env
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
MONGO_URL=mongodb://localhost:27017/ecommerce_orders
KAFKA_BROKER=localhost:9092
```

#### **Email Service** (`apps/email-service/.env`)

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REFRESH_TOKEN=your_google_refresh_token_here
KAFKA_BROKER=localhost:9092
```

#### **Client App** (`apps/client/.env.local`)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_PRODUCT_SERVICE_URL=http://localhost:8000
NEXT_PUBLIC_PAYMENT_SERVICE_URL=http://localhost:8002
NEXT_PUBLIC_ORDER_SERVICE_URL=http://localhost:8001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

#### **Admin App** (`apps/admin/.env.local`)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
NEXT_PUBLIC_PRODUCT_SERVICE_URL=http://localhost:8000
NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:8003
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset_here
```

### 3. Setup Databases

#### **PostgreSQL (Product Database)**

```bash
# Create database
createdb ecommerce_products

# Run Prisma migrations
cd packages/product-db
npx prisma migrate dev
npx prisma generate
```

#### **MongoDB (Order Database)**

```bash
# Make sure MongoDB is running on localhost:27017
# The database will be created automatically
```

### 4. Start Kafka

```bash
cd packages/kafka
docker-compose up -d
```

Verify Kafka is running:

```bash
docker ps
```

You should see 3 Kafka brokers running.

### 5. Run the Application

#### **Development Mode (All Services)**

From the root directory:

```bash
npx pnpm dev
```

This will start:

- Client app on http://localhost:3002
- Admin app on http://localhost:3003
- Product service on http://localhost:8000
- Order service on http://localhost:8001
- Payment service on http://localhost:8002
- Auth service on http://localhost:8003

#### **Run Individual Services**

```bash
# Auth service
npx pnpm --filter auth-service dev

# Product service
npx pnpm --filter product-service dev

# Payment service
npx pnpm --filter payment-service dev

# Order service
npx pnpm --filter order-service dev

# Email service
npx pnpm --filter email-service dev

# Client app
npx pnpm --filter client dev

# Admin app
npx pnpm --filter admin dev
```

## 🔑 Required API Keys & Services

### 1. **Clerk** (Authentication)

- Sign up at https://clerk.com
- Create a new application
- Get your `CLERK_SECRET_KEY` and `CLERK_PUBLISHABLE_KEY`

### 2. **Stripe** (Payments)

- Sign up at https://stripe.com
- Get your API keys from the Dashboard
- Set up webhook endpoint for `STRIPE_WEBHOOK_SECRET`

### 3. **Cloudinary** (Image Upload)

- Sign up at https://cloudinary.com
- Get your cloud name and create an upload preset

### 4. **Google OAuth** (Email Service - Optional)

- Create credentials in Google Cloud Console
- Enable Gmail API
- Get OAuth2 credentials

## 📊 Database Migrations

### Product Database (PostgreSQL)

```bash
cd packages/product-db

# Create a new migration
npx prisma migrate dev --name your_migration_name

# Apply migrations
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate
```

## 🧪 Testing

```bash
# Type checking
npx pnpm check-types

# Linting
npx pnpm lint

# Build all apps
npx pnpm build
```

## 🐳 Docker Services

### Kafka Cluster

The project uses a 3-broker Kafka cluster with KRaft mode:

- Broker 1: localhost:9094
- Broker 2: localhost:9095
- Broker 3: localhost:9096

### Stop Kafka

```bash
cd packages/kafka
docker-compose down
```

### View Kafka Logs

```bash
docker logs kafka-broker-1
docker logs kafka-broker-2
docker logs kafka-broker-3
```

## 🔄 Kafka Topics

The application uses the following Kafka topics:

- `user-events` - User creation/updates
- `order-events` - Order creation/updates
- `payment-events` - Payment processing

## 🚨 Troubleshooting

### Docker not running

```bash
# Start Docker Desktop or Docker daemon
# macOS: Open Docker Desktop
# Linux: sudo systemctl start docker
```

### Port already in use

```bash
# Kill process using a specific port
lsof -ti:8000 | xargs kill -9
```

### Prisma Client not found

```bash
cd packages/product-db
npx prisma generate
```

### Kafka connection issues

```bash
# Restart Kafka cluster
cd packages/kafka
docker-compose restart
```

### Dependencies issues

```bash
# Clean install
rm -rf node_modules
rm pnpm-lock.yaml
npx pnpm install
```

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Kafka Documentation](https://kafka.apache.org/documentation/)
- [Prisma Documentation](https://www.prisma.io/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**
