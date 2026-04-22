# CloneTube

A full-stack YouTube clone application built with React and Node.js.

## 📁 Project Structure

`
FinalActivity-Back-End-/
├── client/          - React frontend (Vite)
├── server/          - Node.js/Express backend
└── README.md        - This file
`

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16+
- **MongoDB** (local or Atlas)
- **Git**

### Setup

#### 1. Clone Repository
`ash
git clone https://github.com/Blitchuuu/FinalActivity-Back-End-.git
cd FinalActivity-Back-End-
`

#### 2. Backend Setup

`ash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT_SECRET
npm install
npm run dev
`

Server runs at: http://localhost:5001

#### 3. Frontend Setup

`ash
cd ../client
npm install
npm run dev
`

Frontend runs at: http://localhost:5173

## 📚 Documentation

- [Backend Setup](./server/README.md)
- [Frontend Setup](./client/README.md)

## 🔧 Configuration

### Server (.env)
`env
PORT=5001
MONGO_URI=mongodb://localhost:27017/clonetube
JWT_SECRET=your_secret_key_here
`

### MongoDB Setup

**Local MongoDB:**
`ash
# Windows
services.msc  # Start MongoDB service
`

**MongoDB Atlas:**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update MONGO_URI in .env

## 🛠️ Technologies

### Frontend
- React 19
- Vite
- Material-UI
- Axios
- React Router

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

## 📝 Features

✅ User Authentication  
✅ Video Upload & Management  
✅ Video Playback  
✅ Like/Dislike System  
✅ Comments  
✅ Subscriptions  
✅ Watch History  
✅ Search Functionality

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## ⚠️ Important

- Never commit .env file to git
- Change JWT_SECRET in production
- Use strong database password
- Update CORS settings for production

## 📄 License

MIT License
