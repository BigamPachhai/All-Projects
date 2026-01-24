# 🚀 Quick Reference Card

## Essential Commands

```bash
# Install dependencies
npx pnpm@9.0.0 install

# Run all services
npx pnpm dev

# Run specific service
npx pnpm --filter SERVICE_NAME dev

# Type checking
npx pnpm check-types

# Linting
npx pnpm lint

# Build all
npx pnpm build
```

## Service Ports

| Service | Port | URL                   |
| ------- | ---- | --------------------- |
| Client  | 3002 | http://localhost:3002 |
| Admin   | 3003 | http://localhost:3003 |
| Product | 8000 | http://localhost:8000 |
| Order   | 8001 | http://localhost:8001 |
| Payment | 8002 | http://localhost:8002 |
| Auth    | 8003 | http://localhost:8003 |

## Kafka Management

```bash
# Start Kafka
cd packages/kafka && docker-compose up -d

# Stop Kafka
cd packages/kafka && docker-compose down

# View logs
docker logs kafka-broker-1

# Check status
docker ps | grep kafka
```

## Database Commands

```bash
# PostgreSQL - Create database
createdb ecommerce_products

# Prisma - Generate client
cd packages/product-db && npx prisma generate

# Prisma - Run migrations
cd packages/product-db && npx prisma migrate dev

# Prisma - Open Studio
cd packages/product-db && npx prisma studio

# MongoDB - Check connection
mongosh --eval "db.version()"
```

## Troubleshooting

```bash
# Kill process on port
lsof -ti:PORT | xargs kill -9

# Restart Docker
docker restart kafka-broker-1 kafka-broker-2 kafka-broker-3

# Clean install
rm -rf node_modules pnpm-lock.yaml
npx pnpm@9.0.0 install

# Check health
curl http://localhost:8000/health
```

## Environment Files

- `apps/auth-service/.env`
- `apps/product-service/.env`
- `apps/payment-service/.env`
- `apps/order-service/.env`
- `apps/email-service/.env`
- `apps/client/.env.local`
- `apps/admin/.env.local`

## Required API Keys

1. **Clerk**: https://clerk.com
2. **Stripe**: https://stripe.com
3. **Cloudinary**: https://cloudinary.com
4. **Google OAuth**: https://console.cloud.google.com (optional)

## File Structure

```
apps/
  ├── admin/         # Admin Dashboard (Next.js)
  ├── client/        # Customer App (Next.js)
  ├── auth-service/  # Auth (Express)
  ├── product-service/  # Products (Express)
  ├── payment-service/  # Payments (Hono)
  └── order-service/    # Orders (Fastify)
packages/
  ├── kafka/         # Kafka Config
  ├── product-db/    # Prisma Schema
  ├── order-db/      # MongoDB Schema
  └── types/         # Shared Types
```

## Documentation

- [GETTING_STARTED.md](./GETTING_STARTED.md) - Setup status
- [SETUP.md](./SETUP.md) - Detailed guide
- [CHECKLIST.md](./CHECKLIST.md) - Pre-launch checklist
- [README.md](./README.md) - Project overview
