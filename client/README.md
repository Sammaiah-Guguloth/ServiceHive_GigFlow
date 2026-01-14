# GigFlow Client

The frontend application for GigFlow, a modern freelance marketplace platform built with React, TypeScript, and Vite.

## Features

- **Modern UI**: Sleek, responsive design with dark theme and glassmorphism effects
- **Real-time Updates**: Socket.io integration for instant notifications
- **State Management**: Redux Toolkit for predictable state management
- **Authentication**: Secure JWT-based authentication flow
- **Gig Management**: Create, browse, and manage freelance gigs
- **Bidding System**: Intuitive bid submission and management
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + React Redux
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Icons**: React Icons

## Pages & Components

### Public Pages

- **Home**: Landing page with hero section and features
- **Login/Register**: Authentication forms with validation

### Protected Pages

- **Post Gig**: Form to create new freelance gigs
- **My Gigs**: Dashboard showing user's posted gigs
- **Browse Gigs**: Searchable list of available gigs
- **View Bids**: Manage bids for a specific gig

### Key Components

- **Navbar**: Navigation with authentication status
- **Footer**: Site footer with links
- **GigList**: Reusable gig display component
- **BidModal**: Bid submission form
- **ViewBidModal**: Bid details and hiring actions

## Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── api/            # Axios configuration and API endpoints
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   │   ├── bids/       # Bid-related components
│   │   ├── browseGigs/ # Gig browsing components
│   │   ├── global/     # Global layout components
│   │   └── home/       # Home page sections
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── redux/          # State management
│   │   ├── slices/     # Redux slices
│   │   └── thunks/     # Async actions
│   ├── socket/         # Socket.io utilities
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the client root with:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Installation & Setup

1. Navigate to the client directory:

   ```bash
   cd client
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## State Management

The app uses Redux Toolkit with the following slices:

- **authSlice**: User authentication state
- **gigSlice**: Gig-related state (browse, my gigs)

### Async Actions (Thunks)

- **authThunk**: Login, register, logout, getMe
- **gigThunk**: Post gig, get gigs, get my gigs
- **bidThunk**: Create bid, get bids, hire bid

## API Integration

All API calls are handled through Axios with interceptors for:

- Base URL configuration
- JWT token attachment
- Error handling

## Socket Integration

Real-time features include:

- Instant hiring notifications
- Live updates for gig status changes

## Styling Guidelines

- **Dark Theme**: Primary color scheme with emerald accents
- **Glassmorphism**: Backdrop blur effects for modern look
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions with Framer Motion

## Contributing

1. Follow the existing code style and structure
2. Use TypeScript for all new code
3. Add proper error handling
4. Test on multiple screen sizes
5. Update documentation as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
