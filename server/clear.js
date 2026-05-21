import mongoose from 'mongoose';
import Video from './models/Video.js';
import User from './models/User.js';
import Comment from './models/Comment.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4,
  maxPoolSize: 10,
  bufferCommands: false
}).then(async () => {
  console.log('Clearing database...');
  await User.deleteMany({});
  await Video.deleteMany({});
  await Comment.deleteMany({});
  console.log('✓ Database cleared successfully!');
  process.exit();
}).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
