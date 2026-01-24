# 🏛️ System Architecture

## Overview

This is a microservices-based e-commerce platform using event-driven architecture with Apache Kafka as the message broker.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐              ┌──────────────────┐         │
│  │   Client App     │              │   Admin App      │         │
│  │   (Next.js)      │              │   (Next.js)      │         │
│  │   Port: 3002     │              │   Port: 3003     │         │
│  └────────┬─────────┘              └────────┬─────────┘         │
│           │                                  │                    │
└───────────┼──────────────────────────────────┼────────────────────┘
            │                                  │
            │         ┌───────────────┐        │
            └─────────┤  Clerk Auth   ├────────┘
                      │  (External)    │
                      └───────────────┘
                             │
┌────────────────────────────┼────────────────────────────────────┐
│                    API Gateway / Load Balancer                   │
│                         (Not Implemented)                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            │                                 │
┌───────────┼─────────────────────────────────┼──────────────────┐
│           │      Microservices Layer        │                  │
├───────────┼─────────────────────────────────┼──────────────────┤
│           │                                 │                  │
│  ┌────────▼─────────┐            ┌─────────▼────────┐         │
│  │  Auth Service    │            │ Product Service  │         │
│  │   (Express)      │            │   (Express)      │         │
│  │   Port: 8003     │            │   Port: 8000     │         │
│  └────────┬─────────┘            └────────┬─────────┘         │
│           │                               │                    │
│           │                               │                    │
│  ┌────────▼─────────┐            ┌───────▼──────────┐         │
│  │ Payment Service  │            │  Order Service   │         │
│  │     (Hono)       │            │   (Fastify)      │         │
│  │   Port: 8002     │            │   Port: 8001     │         │
│  └────────┬─────────┘            └────────┬─────────┘         │
│           │                               │                    │
│           │       ┌──────────────┐        │                    │
│           └───────►  Email Svc   ◄────────┘                    │
│                   │  (Node.js)   │                             │
│                   └──────┬───────┘                             │
└──────────────────────────┼─────────────────────────────────────┘
                           │
┌──────────────────────────┼─────────────────────────────────────┐
│                 Message Broker Layer                            │
├──────────────────────────┼─────────────────────────────────────┤
│                          │                                      │
│         ┌────────────────▼───────────────┐                     │
│         │      Apache Kafka Cluster       │                     │
│         │         (KRaft Mode)            │                     │
│         │                                 │                     │
│         │  ┌──────┐  ┌──────┐  ┌──────┐ │                     │
│         │  │Broker│  │Broker│  │Broker│ │                     │
│         │  │  1   │  │  2   │  │  3   │ │                     │
│         │  │ 9094 │  │ 9095 │  │ 9096 │ │                     │
│         │  └──────┘  └──────┘  └──────┘ │                     │
│         └────────────────┬───────────────┘                     │
└──────────────────────────┼─────────────────────────────────────┘
                           │
                    Topics: │
                    • user-events
                    • order-events
                    • payment-events
                           │
┌──────────────────────────┼─────────────────────────────────────┐
│                   Data Layer                                    │
├──────────────────────────┼─────────────────────────────────────┤
│                          │                                      │
│         ┌────────────────▼───────────────┐                     │
│         │                                │                     │
│    ┌────▼─────┐                  ┌──────▼──────┐              │
│    │PostgreSQL│                  │  MongoDB    │              │
│    │          │                  │             │              │
│    │ Products │                  │   Orders    │              │
│    │Categories│                  │             │              │
│    └──────────┘                  └─────────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    External Services                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌──────────┐      │
│  │  Clerk   │  │  Stripe  │  │Cloudinary │  │  Gmail   │      │
│  │   Auth   │  │ Payment  │  │  Images   │  │   API    │      │
│  └──────────┘  └──────────┘  └───────────┘  └──────────┘      │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Service Responsibilities

### Frontend Services

#### **Client App** (Next.js - Port 3002)

- Customer-facing e-commerce website
- Product browsing and search
- Shopping cart management
- Stripe checkout integration
- Order history
- User authentication (Clerk)

#### **Admin App** (Next.js - Port 3003)

- Administrative dashboard
- Product management (CRUD)
- Category management
- User management
- Order monitoring
- Analytics and reporting
- Image upload (Cloudinary)

### Backend Microservices

#### **Auth Service** (Express - Port 8003)

- User authentication and authorization
- Admin role verification
- User management
- Publishes `user-events` to Kafka

**Technologies**: Express, Clerk, Kafka Producer

#### **Product Service** (Express - Port 8000)

- Product CRUD operations
- Category management
- Product search and filtering
- Product recommendations
- Consumes `user-events` from Kafka

**Technologies**: Express, Prisma, PostgreSQL, Kafka

#### **Order Service** (Fastify - Port 8001)

- Order creation and management
- Order status tracking
- User order history
- Consumes `payment-events` from Kafka
- Publishes `order-events` to Kafka

**Technologies**: Fastify, MongoDB, Kafka

#### **Payment Service** (Hono - Port 8002)

- Stripe checkout session creation
- Payment processing
- Webhook handling from Stripe
- Publishes `payment-events` to Kafka

**Technologies**: Hono, Stripe, Kafka

#### **Email Service** (Node.js)

- Email notifications
- Order confirmations
- Payment receipts
- Consumes events from Kafka

**Technologies**: Node.js, Gmail API, Kafka Consumer

## Data Flow

### Order Creation Flow

```
1. Customer adds items to cart (Client App)
   │
2. Customer clicks "Checkout"
   │
3. POST /sessions/create-checkout-session (Payment Service)
   │
4. Creates Stripe checkout session
   │
5. Redirects to Stripe Checkout
   │
6. Customer completes payment on Stripe
   │
7. Stripe sends webhook to /webhooks (Payment Service)
   │
8. Payment Service publishes "payment-events" to Kafka
   │
9. Order Service consumes "payment-events"
   │
10. Order Service creates order in MongoDB
    │
11. Order Service publishes "order-events" to Kafka
    │
12. Email Service consumes "order-events"
    │
13. Email Service sends confirmation email
    │
14. Customer redirected back to site with order details
```

### Product Management Flow (Admin)

```
1. Admin logs in to Admin Dashboard
   │
2. Admin creates/updates product
   │
3. Admin uploads images to Cloudinary
   │
4. POST/PUT /products (Product Service)
   │
5. Product Service saves to PostgreSQL
   │
6. Product appears in Client App
```

## Communication Patterns

### Synchronous (REST APIs)

- Frontend → Backend services
- Used for: Queries, immediate responses
- Examples:
  - Get products list
  - Create checkout session
  - Get user orders

### Asynchronous (Kafka Events)

- Service → Kafka → Service(s)
- Used for: Events, eventual consistency
- Examples:
  - User created → Update product permissions
  - Payment completed → Create order
  - Order created → Send email

## Kafka Topics

| Topic            | Producers       | Consumers                    | Purpose                |
| ---------------- | --------------- | ---------------------------- | ---------------------- |
| `user-events`    | Auth Service    | Product Service              | User lifecycle events  |
| `order-events`   | Order Service   | Email Service                | Order lifecycle events |
| `payment-events` | Payment Service | Order Service, Email Service | Payment status updates |

## Database Schema

### PostgreSQL (Product Database)

```sql
Table: Product
- id (PK)
- name
- shortDescription
- description
- price
- sizes[]
- colors[]
- images (JSON)
- categorySlug (FK)
- createdAt
- updatedAt

Table: Category
- id (PK)
- name
- slug (unique)
```

### MongoDB (Order Database)

```javascript
Collection: orders
{
  _id: ObjectId,
  userId: String,
  items: [
    {
      productId: Number,
      name: String,
      price: Number,
      quantity: Number,
      size: String,
      color: String
    }
  ],
  total: Number,
  status: String,
  paymentIntentId: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security

### Authentication & Authorization

- **Clerk** handles user authentication
- JWT tokens for API authentication
- Middleware on all protected routes
- Admin role verification

### API Security

- CORS configured for allowed origins
- Environment variables for secrets
- Webhook signature verification (Stripe)
- Input validation on all endpoints

## Scalability Considerations

### Horizontal Scaling

- All services are stateless
- Can run multiple instances behind load balancer
- Kafka handles distributed message processing

### Database Scaling

- PostgreSQL: Read replicas for product queries
- MongoDB: Sharding for order data
- Prisma connection pooling

### Caching (Future Enhancement)

- Redis for session management
- Product catalog caching
- API response caching

## Monitoring & Observability (To Be Implemented)

### Recommended Additions

- **Logging**: Winston, Pino
- **Metrics**: Prometheus
- **Tracing**: Jaeger, OpenTelemetry
- **Health Checks**: Already implemented on all services
- **Error Tracking**: Sentry

## Development vs Production

### Development

- Local databases (PostgreSQL, MongoDB)
- Local Kafka (Docker Compose)
- Development Stripe keys
- Local file storage

### Production (Recommendations)

- Managed databases (AWS RDS, MongoDB Atlas)
- Managed Kafka (Confluent Cloud, AWS MSK)
- Production Stripe keys
- Cloud storage (S3, Cloudinary)
- API Gateway (Kong, AWS API Gateway)
- Container orchestration (Kubernetes, ECS)

## Technology Stack Summary

| Layer           | Technology           | Purpose                 |
| --------------- | -------------------- | ----------------------- |
| Frontend        | Next.js 15, React 19 | Web applications        |
| Styling         | TailwindCSS 4        | UI styling              |
| State           | Zustand              | Client state management |
| Auth            | Clerk                | Authentication          |
| API - Express   | Node.js, Express     | Auth, Product services  |
| API - Fastify   | Fastify              | Order service           |
| API - Hono      | Hono                 | Payment service         |
| Database        | PostgreSQL + Prisma  | Product data            |
| Database        | MongoDB              | Order data              |
| Message Queue   | Apache Kafka         | Event streaming         |
| Payments        | Stripe               | Payment processing      |
| Email           | Gmail API            | Notifications           |
| Images          | Cloudinary           | Image storage           |
| Monorepo        | Turborepo            | Build system            |
| Package Manager | pnpm                 | Dependency management   |
| TypeScript      | TypeScript 5         | Type safety             |

---

**For implementation details, see [SETUP.md](./SETUP.md)**
