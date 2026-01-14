# GigFlow 🛠️

A modern, real-time freelance marketplace platform built with the MERN stack. Connect clients with freelancers through a seamless gig-based system with instant notifications and secure transactions.

![GigFlow Banner](https://via.placeholder.com/1200x400/0f0f0f/00ff88?text=GigFlow+-+Freelance+Marketplace)

## ✨ Features

- **🔐 Secure Authentication** - JWT-based auth with HttpOnly cookies
- **⚡ Real-time Notifications** - Instant hiring alerts via Socket.io
- **🎨 Modern UI** - Sleek dark theme with glassmorphism effects
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔄 Race Condition Safety** - MongoDB transactions prevent double hiring
- **🎯 Dual Role System** - Users can be both clients and freelancers
- **🔍 Smart Search** - Find gigs by title with real-time filtering
- **📊 Dashboard** - Manage your gigs and bids in one place

## 🚀 Quick Start

Get started in minutes! Follow our [Setup Guide](SET_UP.md) for detailed instructions.

```bash
# Clone the repository
git clone <repository-url>
cd servicehive-gigflow

# Setup backend
cd server && npm install && npm run dev

# Setup frontend (new terminal)
cd client && npm install && npm run dev

# Visit http://localhost:5173
```

## 📁 Project Structure

```
servicehive-gigflow/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # State management
│   │   └── hooks/       # Custom React hooks
│   └── README.md        # Frontend documentation
├── server/              # Node.js backend
│   ├── src/
│   │   ├── controllers/ # Route handlers
│   │   ├── models/      # MongoDB schemas
│   │   ├── routes/      # API endpoints
│   │   └── socket/      # Real-time events
│   └── README.md        # Backend documentation
├── SET_UP.md            # Complete setup guide
└── README.md            # This file
```

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Socket.io Client** - Real-time communication
- **Framer Motion** - Smooth animations
- **React Toastify** - Toast notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Socket.io** - Real-time bidirectional communication

## 📋 System Flow

1. **Register/Login** → JWT cookie authentication
2. **Post a Gig** → Create freelance opportunities
3. **Browse Gigs** → Discover available projects
4. **Submit Bids** → Apply to gigs with proposals
5. **Review Bids** → Evaluate freelancer proposals
6. **Hire Freelancer** → Atomic hiring with real-time notifications

## 🎯 API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | User login        |
| GET    | `/api/gigs`          | Get open gigs     |
| POST   | `/api/gigs`          | Create new gig    |
| POST   | `/api/bids`          | Submit bid        |
| PATCH  | `/api/bids/:id/hire` | Hire freelancer   |

## 📊 Data Models

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

## 🔧 Development

### Prerequisites

- Node.js (v18+)
- MongoDB (v5+)
- Git

### Environment Setup

**Server (.env)**

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/gigflow
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

**Client (.env)**

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### Available Scripts

```bash
# Backend
cd server
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server

# Frontend
cd client
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

## 📚 Documentation

- **[Setup Guide](SET_UP.md)** - Complete installation and configuration
- **[Client Docs](client/README.md)** - Frontend architecture and components
- **[Server Docs](server/README.md)** - Backend API and database schema
- **[Info](info.txt)** - Project requirements and specifications

## 🎥 Demo

Watch our 2-minute demo video showcasing:

- User registration and login
- Gig creation workflow
- Bid submission process
- Real-time hiring notifications

_[Demo video link will be added]_

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by leading freelance platforms
- Special thanks to the open-source community

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/gigflow/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/gigflow/discussions)
- **Email**: support@gigflow.com

---

**GigFlow** - Connecting talent with opportunity, one gig at a time. 🚀
