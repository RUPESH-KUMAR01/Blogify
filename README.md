# Blogify

## Overview
Blogify is a modern, full-stack blogging platform that allows users to write, publish, and explore blogs effortlessly. It is built with a scalable architecture.


## Features
- **User Authentication** – Secure authentication using JWT
- **Skeleton Loading** – Enhances user experience with smooth content loading
- **Connection Pooling** – Optimized database performance with Prisma
- **Schema Validation & Type Safety** – Powered by Zod

## Tech Stack

### Frontend
- **React** – Component-based UI development
- **Vite** – Fast build tool for an improved development experience
- **Tailwind CSS** – Modern utility-first styling
- **Skeleton Loaders** – Better UX while fetching data

### Backend
- **Cloudflare Workers** – Serverless backend logic
- **TypeScript** – Strongly typed JavaScript for reliability
- **Prisma** – ORM with connection pooling
- **PostgreSQL** – Relational database
- **Zod** – Type inference and schema validation
- **JWT** – Secure user authentication

## Getting Started
Follow these steps to set up the project locally.

### Prerequisites
- Node.js
- PostgreSQL

### Installation
#### Clone the repository
```sh
git clone https://github.com/RUPESH-KUMAR01/Blogify.git
cd Blogify
```

#### Install dependencies
```sh
cd frontend
npm install
```

Open one more shell and execute:
```sh
cd backend
npm install
```

### Configuration
#### Set up environment variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

Configure Cloudflare Workers and Vercel for deployment. (Refer to their documentation for detailed steps.)

### Running the Application
#### Start the backend and frontend
```sh
# In backend shell used before
npm run dev

# In frontend shell used before
npm run dev
```

Open the app in your browser at `http://localhost:5173/`.

