require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const { Server } = require('socket.io');
const route = require('./router/routes');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cookieParser());

app.use(express.json());

// CORS setup for Express
app.use(
  cors({
    origin: 'https://freelance.deelance.com', // Frontend URL
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    exposedHeaders: [
      'Content-Disposition',
      'X-Auth-Token',
      'Authorization',
      'Set-Cookie',
    ],
  }),
);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Socket.io setup with CORS
const io = new Server(server, {
  cors: {
    origin: 'https://freelance.deelance.com', //====Your frontend URL=====//
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
});

io.on('connection', socket => {
  console.log('a user connected');

  // Handle chat message event
  socket.on('chat message', msg => {
    console.log(`message: ${msg}`);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//==================production url======================//
mongoose
  .connect(process.env.MONGODB_URI_second, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => {
    console.log(
      'MongoDB connected successfully',
      process.env.MONGODB_URI_second,
    );
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

//======================platform url=====================//
// mongoose
//   .connect(process.env.MONGODB_URI_PRIMARY, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000,
//   })
//   .then(() => {
//     console.log('MongoDB connected successfully');
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });
// Set io instance to app to be accessed in routes
app.set('io', io);
app.use('/', route);

// Start the server
server.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
