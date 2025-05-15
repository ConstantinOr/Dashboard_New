# Investment Dashboard

A modern web application for tracking and managing investment portfolios. Built with Next.js, Prisma, and PostgreSQL. Deployed on [Vercel](https://vercel.com).

## Features

- Real-time investment portfolio tracking
- Interactive dashboard with key metrics
- Investment table with server-side sorting and filtering
- ROI filtering and sorting
- Server-side pagination for optimal performance
- Individual investment payout simulation
- Row selection and highlighting

## Tech Stack

- Next.js 14
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Vercel Platform

## Deployment

This project is optimized for deployment on Vercel:

- Automatic deployments from Git
- Serverless functions for API routes
- Edge functions for optimal performance
- Built-in CI/CD pipeline
- Automatic HTTPS
- Global CDN

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your database credentials.

4. Run database migrations:
```bash
pnpm prisma migrate dev
```

5. Seed the database with sample data:
```bash
pnpm prisma db seed
```
This will create:
- 100 random investors
- 5-10 investments per investor
- Random investment amounts between $100K and $1M
- ROI between 5% and 35%

6. Start the development server:
```bash
pnpm dev
```

7. Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Database Management

To view and manage your database through Prisma Studio:
```bash
pnpm prisma studio
```
Then open [http://localhost:5555](http://localhost:5555)

## API Endpoints

- `GET /api/dashboard` - Fetch dashboard data with pagination, sorting, and filtering
  - Query parameters:
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 5)
    - `sortField`: Field to sort by (default: 'roi')
    - `sortOrder`: Sort order ('asc' or 'desc', default: 'desc')
    - `minRoi`: Minimum ROI filter
- `POST /api/dashboard/payout` - Simulate payout for a specific investment

## Features in Detail

### Dashboard Metrics
- Total Invested Amount
- Portfolio Value
- Distributions Received
- Outstanding Commitments

### Investment Table
- Server-side sorting by all columns
- Server-side filtering by minimum ROI percentage
- Server-side pagination with 5 items per page
- Row selection with visual feedback
- Individual payout simulation per investment

### Data Management
- Automatic data refresh after payouts
- Real-time updates of portfolio metrics
- Efficient server-side pagination for large datasets
- Optimized database queries with Prisma 