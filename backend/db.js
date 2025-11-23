// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/notebook'; // change DB name if needed

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); // no callback here
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // optional: exit app if DB fails
  }
};

module.exports = connectToMongo;
