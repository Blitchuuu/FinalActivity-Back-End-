import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Video from './models/Video.js';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,  // Use IPv4, skip IPv6 on Windows
  maxPoolSize: 10,
  bufferCommands: false
}).then(async () => {
  console.log('Seeding...');
  await User.deleteMany({});
  await Video.deleteMany({});
  
  // Seed users first
  const hashedPassword = await bcrypt.hash('password', 12);
  const user1 = new User({ username: 'testuser', email: 'test@example.com', password: hashedPassword });
  await user1.save();
  
  // Seed videos with thumbnails
  const videosData = [
    { title: 'Epic Gaming Montage', description: 'Best plays!', thumbnail: 'https://i.imgur.com/gaming1.jpg', youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channel: 'GamerPro' },
    { title: 'Music Tutorial', description: 'Learn guitar', thumbnail: 'https://i.imgur.com/music1.jpg', youtubeUrl: 'https://youtube.com/watch?v=music123', channel: 'MusicMaster' },
    { title: 'Tech Review', description: 'New laptop', thumbnail: 'https://i.imgur.com/tech1.jpg', youtubeUrl: 'https://youtube.com/watch?v=tech456', channel: 'TechGuru' },
    { title: 'Cooking Recipe', description: 'Easy pasta', thumbnail: 'https://i.imgur.com/food1.jpg', youtubeUrl: 'https://youtube.com/watch?v=cook789', channel: 'ChefLife' },
    { title: 'Fitness Workout', description: 'Home workout', thumbnail: 'https://i.imgur.com/fit1.jpg', youtubeUrl: 'https://youtube.com/watch?v=fit101', channel: 'FitFam' }
  ];
  
  const videos = await Video.insertMany(videosData.map(v => ({ ...v, channelId: user1._id })));
  console.log(`Seeded ${videos.length} videos and 1 user (test@example.com / password)`);
  process.exit();
});
