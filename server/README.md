# GigFlow Server

The backend API for GigFlow, a freelance marketplace platform built with Node.js, Express, and TypeScript.

## Features

- **Authentication**: JWT-based authentication with HttpOnly cookies
- **Gig Management**: Create, read, and manage freelance gigs
- **Bidding System**: Submit and manage bids on gigs
- **Real-time Notifications**: Socket.io integration for instant hiring notifications
- **Race Condition Safety**: MongoDB transactions to prevent double hiring
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Real-time**: Socket.io
- **Validation**: Built-in Express validation

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

### Gigs

- `GET /api/gigs` - Get all open gigs (with optional search)
- `POST /api/gigs` - Create a new gig
- `GET /api/gigs?mine=true` - Get user's posted gigs

### Bids

- `POST /api/bids` - Submit a bid on a gig
- `GET /api/bids/:gigId` - Get all bids for a specific gig
- `PATCH /api/bids/:bidId/hire` - Hire a freelancer (atomic operation)

## Project Structure

```
server/
├── src/
│   ├── config/          # Database and app configuration
│   ├── controllers/     # Route handlers
│   ├── middlewares/     # Authentication and other middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API route definitions
│   ├── socket/          # Socket.io event handlers
│   └── utils/           # Utility functions
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the server root with:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/gigflow
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
```

## Installation & Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see above)

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Data Models

### User

```typescript
{
  name: string;
  email: string;
  password: string; // hashed
}
```

### Gig

```typescript
{
  title: string;
  description: string;
  budget: number;
  ownerId: ObjectId;
  status: "open" | "assigned";
}
```

### Bid

```typescript
{
  gigId: ObjectId;
  freelancerId: ObjectId;
  message: string;
  price: number;
  status: "pending" | "hired" | "rejected";
}
```

## Socket Events

- `hired` - Emitted when a freelancer is hired, includes hiring details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
