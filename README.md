# ISP Operator Platform

A showcase-ready ISP operator dashboard built with:

- Next.js 15 + TypeScript
- Tailwind CSS
- NestJS + TypeScript
- Mock data for the current prototype
- Ready to deploy as two separate Vercel projects

## Structure

```text
isp-operator-platform/
├── frontend/   # Next.js operator dashboard
└── backend/    # NestJS mock API
```

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Open http://localhost:5000/api/health

The frontend works with local mock data by default. To use the NestJS mock API, create:

```text
frontend/.env.local

NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Deploy frontend to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Set the project Root Directory to `frontend`.
4. Framework Preset: Next.js.
5. Deploy.

The dashboard is intentionally self-contained and uses mock data, so it can be showcased without a backend.

## Deploy backend to Vercel

1. Create a second Vercel project from the same GitHub repository.
2. Set Root Directory to `backend`.
3. Deploy.
4. Copy the backend URL into the frontend project's environment variables:

```text
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app/api
```

The included `vercel.json` and `src/vercel.ts` expose NestJS as a serverless function.

## Important

This prototype intentionally keeps business data in frontend/backend mock stores. Later, replace the mock service implementations with MongoDB/Mongoose repositories without changing the dashboard UI contract.
