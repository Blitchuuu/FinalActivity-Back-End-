# CloneTube Client

Frontend for CloneTube - a YouTube clone built with React + Vite.

## Features

- 🎬 Browse and watch videos
- 🔐 User authentication
- ❤️ Like/Dislike videos
- 💬 Comment on videos
- 📺 Upload videos
- 👥 Subscribe to channels
- 🔍 Search videos
- 📜 Watch history

## Prerequisites

- **Node.js** v16+ ([Download](https://nodejs.org/))
- Backend server running at http://localhost:5001

## Quick Start

### 1. Install Dependencies

`ash
npm install
`

### 2. Start Development Server

`ash
npm run dev
`

Open http://localhost:5173 in your browser

### 3. Build for Production

`ash
npm run build
`

## Project Structure

`
src/
├── api/          - API configuration & requests
├── components/   - Reusable React components
├── context/      - React Context (Auth)
├── pages/        - Page components
├── utils/        - Helper functions
└── App.jsx       - Main app component
`

## Available Scripts

- 
pm run dev - Start dev server
- 
pm run build - Build for production
- 
pm run preview - Preview production build
- 
pm run lint - Run ESLint

## Environment Setup

The app connects to backend at /api (relative path). Ensure backend is running before starting frontend.

## Technologies

- React 19
- Vite
- Material-UI (MUI)
- Axios
- React Router

## API Integration

Axios instance is configured in src/api/axios.js with:
- Base URL: /api
- Auto JWT token injection in Authorization header
- Error handling

