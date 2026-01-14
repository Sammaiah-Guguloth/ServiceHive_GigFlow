# GigFlow Setup Guide

This guide will help you set up the GigFlow freelance marketplace platform locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

## Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd servicehive-gigflow
   ```

2. **Set up the backend**

   ```bash
   cd server
   npm install
   cp .env.example .env  # Configure your environment variables
   npm run dev
   ```

3. **Set up the frontend** (in a new terminal)

   ```bash
   cd client
   npm install
   cp .env.example .env  # Configure your environment variables
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Detailed Setup

### Backend Setup

1. **Navigate to server directory**

   ```bash
   cd server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `server/` directory:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/gigflow
   JWT_SECRET=your_super_secret_jwt_key_here
   CLIENT_URL=http://localhost:5173
   ```

   **Environment Variables Explanation:**

   - `NODE_ENV`: Environment mode (development/production)
   - `PORT`: Server port (default: 5000)
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token signing (use a strong random string)
   - `CLIENT_URL`: Frontend URL for CORS configuration

4. **Start MongoDB**
   Make sure MongoDB is running on your system:

   ```bash
   # On macOS with Homebrew
   brew services start mongodb/brew/mongodb-community

   # On Windows
   net start MongoDB

   # On Linux
   sudo systemctl start mongod
   ```

5. **Start the server**

   ```bash
   npm run dev
   ```

   The server will start on http://localhost:5000

### Frontend Setup

1. **Navigate to client directory**

   ```bash
   cd client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `client/` directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_SOCKET_URL=http://localhost:5000
   ```

   **Environment Variables Explanation:**

   - `VITE_API_URL`: Backend API base URL
   - `VITE_SOCKET_URL`: Socket.io server URL

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The frontend will start on http://localhost:5173

## Database Setup

The application uses MongoDB. The database and collections will be created automatically when you first run the server.

### Default Database Name

- Database: `gigflow`

### Collections Created

- `users` - User accounts
- `gigs` - Freelance gigs/projects
- `bids` - Bids on gigs

## Testing the Setup

1. **Open your browser** and go to http://localhost:5173

2. **Register a new account** or login if you already have one

3. **Test the core features:**

   - Create a gig
   - Browse available gigs
   - Submit a bid
   - Hire a freelancer (if you have bids on your gig)

4. **Check real-time notifications** by opening multiple browser tabs

## Troubleshooting

### Common Issues

**MongoDB Connection Error**

- Ensure MongoDB is running
- Check your `MONGO_URI` in `.env`
- Verify MongoDB is accessible on the specified port

**Port Already in Use**

- Change the `PORT` in server `.env` (e.g., 5001)
- Update `VITE_API_URL` and `VITE_SOCKET_URL` in client `.env` accordingly

**CORS Errors**

- Ensure `CLIENT_URL` in server `.env` matches your frontend URL
- Check that the server is running before starting the client

**Socket Connection Issues**

- Verify `VITE_SOCKET_URL` points to the correct server
- Check browser console for WebSocket errors

### Development Tips

- **Hot Reload**: Both frontend and backend support hot reloading
- **API Testing**: Use tools like Postman or Insomnia to test API endpoints
- **Database Inspection**: Use MongoDB Compass to view database contents
- **Logs**: Check terminal output for server logs and errors

## Production Deployment

For production deployment, you'll need to:

1. Set `NODE_ENV=production` in server `.env`
2. Configure production MongoDB instance
3. Set up proper SSL certificates
4. Configure reverse proxy (nginx/apache)
5. Set secure cookie options
6. Build the frontend: `npm run build` in client directory

## Support

If you encounter any issues during setup:

1. Check the [Issues](https://github.com/yourusername/gigflow/issues) page
2. Review the documentation in `client/README.md` and `server/README.md`
3. Ensure all prerequisites are properly installed

## Next Steps

Once set up, you can:

- Explore the codebase
- Customize the UI/UX
- Add new features
- Set up automated testing
- Configure CI/CD pipelines

Happy coding! 🚀
