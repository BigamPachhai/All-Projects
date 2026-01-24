# ✅ Pre-Launch Checklist

Use this checklist to ensure your e-commerce microservices platform is ready to run.

## 📋 Environment Setup

### Required Tools

- [ ] Node.js 18+ installed (`node --version`)
- [ ] pnpm 9.0.0 available (`npx pnpm@9.0.0 --version`)
- [ ] Docker installed and running (`docker --version`)
- [ ] Docker Compose available (`docker-compose --version`)
- [ ] PostgreSQL installed and running (`psql --version`)
- [ ] MongoDB installed and running (`mongosh --version` or `mongo --version`)

## 🔑 API Keys & Services

### Clerk (Required for all services)

- [ ] Sign up at https://clerk.com
- [ ] Create a new application
- [ ] Get `CLERK_SECRET_KEY`
- [ ] Get `CLERK_PUBLISHABLE_KEY`
- [ ] Configure both keys in all `.env` files

### Stripe (Required for payments)

- [ ] Sign up at https://stripe.com
- [ ] Get `STRIPE_SECRET_KEY` from Dashboard
- [ ] Get `STRIPE_PUBLISHABLE_KEY`
- [ ] Setup webhook endpoint
- [ ] Get `STRIPE_WEBHOOK_SECRET`
- [ ] Add Stripe keys to `payment-service/.env`
- [ ] Add Stripe publishable key to `client/.env.local`

### Cloudinary (Required for admin image uploads)

- [ ] Sign up at https://cloudinary.com
- [ ] Get your cloud name
- [ ] Create an upload preset
- [ ] Add credentials to `admin/.env.local`

### Google OAuth (Optional - for email service)

- [ ] Create project in Google Cloud Console
- [ ] Enable Gmail API
- [ ] Create OAuth2 credentials
- [ ] Get `GOOGLE_CLIENT_ID`
- [ ] Get `GOOGLE_CLIENT_SECRET`
- [ ] Get `GOOGLE_REFRESH_TOKEN`
- [ ] Add credentials to `email-service/.env`

## 📁 Environment Files

- [ ] `apps/auth-service/.env` created and configured
- [ ] `apps/product-service/.env` created and configured
- [ ] `apps/payment-service/.env` created and configured
- [ ] `apps/order-service/.env` created and configured
- [ ] `apps/email-service/.env` created (optional)
- [ ] `apps/client/.env.local` created and configured
- [ ] `apps/admin/.env.local` created and configured

## 🗄️ Database Setup

### PostgreSQL (Product Database)

- [ ] PostgreSQL server is running
- [ ] Database `ecommerce_products` created (`createdb ecommerce_products`)
- [ ] Connection string is correct in `product-service/.env`
- [ ] Prisma client generated (`cd packages/product-db && npx prisma generate`)
- [ ] Migrations run (`cd packages/product-db && npx prisma migrate dev`)

### MongoDB (Order Database)

- [ ] MongoDB server is running
- [ ] MongoDB is accessible at `localhost:27017`
- [ ] Connection string is correct in `order-service/.env`

## 📡 Kafka Setup

- [ ] Docker is running
- [ ] Kafka containers are started (`cd packages/kafka && docker-compose up -d`)
- [ ] All 3 Kafka brokers are running (`docker ps | grep kafka`)
- [ ] Kafka brokers are accessible:
  - [ ] Broker 1: localhost:9094
  - [ ] Broker 2: localhost:9095
  - [ ] Broker 3: localhost:9096

## 📦 Dependencies

- [ ] Root dependencies installed (`npx pnpm@9.0.0 install`)
- [ ] No installation errors
- [ ] All workspace packages linked correctly

## 🧪 Pre-Flight Tests

### Check Services Can Start

- [ ] Auth service can start (`npx pnpm --filter auth-service dev`)
- [ ] Product service can start (`npx pnpm --filter product-service dev`)
- [ ] Payment service can start (`npx pnpm --filter payment-service dev`)
- [ ] Order service can start (`npx pnpm --filter order-service dev`)
- [ ] Client app can start (`npx pnpm --filter client dev`)
- [ ] Admin app can start (`npx pnpm --filter admin dev`)

### Health Checks (after starting services)

- [ ] Auth service health: http://localhost:8003/health
- [ ] Product service health: http://localhost:8000/health
- [ ] Payment service health: http://localhost:8002/health
- [ ] Order service health: http://localhost:8001/health
- [ ] Client app: http://localhost:3002
- [ ] Admin app: http://localhost:3003

## 🚀 Ready to Launch!

Once all items are checked:

```bash
# Run all services
npx pnpm dev
```

## 🔍 Verification Steps

1. **Client App** (http://localhost:3002)
   - [ ] Homepage loads
   - [ ] Products are displayed
   - [ ] Can sign in with Clerk
   - [ ] Can add items to cart
   - [ ] Checkout redirects to Stripe

2. **Admin App** (http://localhost:3003)
   - [ ] Admin dashboard loads
   - [ ] Can sign in with Clerk (admin account)
   - [ ] Can view products
   - [ ] Can create new product
   - [ ] Can upload images to Cloudinary

3. **Microservices**
   - [ ] All health endpoints return 200
   - [ ] Kafka topics are created
   - [ ] Services can communicate via Kafka

## ❌ Troubleshooting

If you encounter issues, check:

1. **Port Conflicts**

   ```bash
   lsof -ti:3002 | xargs kill -9  # Client
   lsof -ti:3003 | xargs kill -9  # Admin
   lsof -ti:8000 | xargs kill -9  # Product
   lsof -ti:8001 | xargs kill -9  # Order
   lsof -ti:8002 | xargs kill -9  # Payment
   lsof -ti:8003 | xargs kill -9  # Auth
   ```

2. **Docker Issues**

   ```bash
   docker ps  # Check running containers
   docker logs kafka-broker-1  # Check Kafka logs
   cd packages/kafka && docker-compose restart  # Restart Kafka
   ```

3. **Database Issues**

   ```bash
   psql -l  # List PostgreSQL databases
   mongosh --eval "db.adminCommand('listDatabases')"  # Check MongoDB
   ```

4. **Clear Cache**
   ```bash
   rm -rf node_modules
   rm pnpm-lock.yaml
   npx pnpm@9.0.0 install
   ```

## 📞 Need Help?

- Check [SETUP.md](./SETUP.md) for detailed instructions
- Review error logs in the terminal
- Ensure all API keys are valid
- Verify all services are using the correct ports

---

**Once everything is checked, you're ready to go! 🎉**
