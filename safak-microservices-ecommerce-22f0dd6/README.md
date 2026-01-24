# 🛒 E-Commerce Microservices Platform

A full-stack e-commerce platform built with microservices architecture using modern web technologies.

## 🚀 Quick Start

```bash
# Install dependencies
npx pnpm@9.0.0 install

# Configure environment variables (see SETUP.md)
# Copy .env.example files and fill in your API keys

# Run the quick start script
./start.sh

# Start all services
npx pnpm dev
```

📚 **For detailed setup instructions, see [SETUP.md](./SETUP.md)**

## 🏗️ Architecture

This is a microservices-based e-commerce platform built with Turborepo monorepo.

### Apps and Packages

- **`client`**: Customer-facing Next.js app (Port 3002)
- **`admin`**: Admin dashboard Next.js app (Port 3003)
- **`auth-service`**: Authentication microservice using Express & Clerk (Port 8003)
- **`product-service`**: Product management microservice using Express (Port 8000)
- **`payment-service`**: Payment processing microservice using Hono & Stripe (Port 8002)
- **`order-service`**: Order management microservice using Fastify (Port 8001)
- **`email-service`**: Email notification service
- **`@repo/kafka`**: Kafka client and Docker configuration
- **`@repo/product-db`**: Prisma schema for PostgreSQL product database
- **`@repo/order-db`**: MongoDB schema for orders
- **`@repo/types`**: Shared TypeScript types
- **`@repo/eslint-config`**: Shared ESLint configurations
- **`@repo/typescript-config`**: Shared TypeScript configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS, Zustand
- **Authentication**: Clerk
- **Backend Services**:
  - Express.js (Auth, Product services)
  - Fastify (Order service)
  - Hono (Payment service)
- **Databases**:
  - PostgreSQL with Prisma (Products)
  - MongoDB (Orders)
- **Message Queue**: Apache Kafka (KRaft mode)
- **Payments**: Stripe
- **Image Upload**: Cloudinary
- **Email**: Gmail API
- **Monorepo**: Turborepo with pnpm workspaces

## 📋 Prerequisites

- Node.js 18+
- pnpm 9.0.0
- Docker & Docker Compose
- PostgreSQL
- MongoDB

## 🎯 Features

- **Customer Portal**
  - Browse products by category
  - Search and filter products
  - Shopping cart management
  - Stripe checkout integration
  - Order history and tracking

- **Admin Dashboard**
  - Product management (CRUD)
  - Category management
  - User management
  - Order monitoring
  - Analytics dashboard

- **Microservices**
  - Event-driven architecture with Kafka
  - Service isolation and scalability
  - RESTful APIs
  - Authentication across services

## 🏃 Development

### Run All Services

```bash
npx pnpm dev
```

### Run Specific Service

```bash
npx pnpm --filter client dev
npx pnpm --filter admin dev
npx pnpm --filter product-service dev
# etc...
```

## 📦 Build & Deploy

### Build

To build all apps and packages, run the following command:

```bash
npx pnpm build
```

Build a specific package:

```bash
npx pnpm --filter client build
```

### Type Checking

```bash
npx pnpm check-types
```

### Linting

```bash
npx pnpm lint
```

## 🔌 Service Ports

| Service         | Port | URL                   |
| --------------- | ---- | --------------------- |
| Client App      | 3002 | http://localhost:3002 |
| Admin App       | 3003 | http://localhost:3003 |
| Product Service | 8000 | http://localhost:8000 |
| Order Service   | 8001 | http://localhost:8001 |
| Payment Service | 8002 | http://localhost:8002 |
| Auth Service    | 8003 | http://localhost:8003 |
| Kafka Broker 1  | 9094 | localhost:9094        |
| Kafka Broker 2  | 9095 | localhost:9095        |
| Kafka Broker 3  | 9096 | localhost:9096        |

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Detailed setup instructions
- [Turborepo](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/docs)
- [Clerk](https://clerk.com/docs)
- [Stripe](https://stripe.com/docs)
- [Kafka](https://kafka.apache.org/documentation/)
- [Prisma](https://www.prisma.io/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Turborepo**

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
