const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const route = require('./router/routes');

app.use(cookieParser());

require('dotenv').config({
  path: '../.env', // Adjust the path to point outside the src folder
});

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'], // Allow requests from the specified origin
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies to be sent from frontend
  }),
);
// app.set('trust proxy', true);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose
  .connect(
    'mongodb+srv://16039233:16039233@hariom-semwal.ylnslae.mongodb.net/PLATFORM',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    },
  )
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use('/', route);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
