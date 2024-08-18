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
    origin: 'http://localhost:3000', // Frontend URL
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
    origin: 'http://localhost:3000', //====Your frontend URL=====//
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

// MongoDB connection
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

// Set io instance to app to be accessed in routes
app.set('io', io);
app.use('/', route);

// Start the server
server.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});

// require('dotenv').config({ path: '../.env' });
// const express = require('express');
// const mongoose = require('mongoose');
// const http = require('http');
// const cors = require('cors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const { join } = require('path');
// const { Server } = require('socket.io');
// const route = require('./router/routes');

// const app = express();
// const server = http.createServer(app);

// // Middleware
// app.use(cookieParser());
// app.use(express.json());

// // CORS setup for Express
// app.use(
//   cors({
//     origin: 'http://localhost:3000', // Frontend URL
//     methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     exposedHeaders: [
//       'Content-Disposition',
//       'X-Auth-Token',
//       'Authorization',
//       'Set-Cookie',
//     ],
//   }),
// );

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// // Socket.io setup with CORS
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000', // Your frontend URL
//     methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   },
// });

// io.on('connection', socket => {
//   console.log('a user connected');

//   // Handle chat message event
//   socket.on('chat message', msg => {
//     console.log(`message: ${msg}`);
//   });

//   // Handle disconnect event
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// // Function to log database stats
// async function logDatabaseStats() {
//   try {
//     const db = mongoose.connection.db;
//     const stats = await db.stats();
//     console.log('Database Stats:', stats);
//   } catch (error) {
//     console.error('Error fetching database stats:', error);
//   }
// }

// // MongoDB connection
// mongoose
//   .connect(
//     'mongodb+srv://16039233:16039233@hariom-semwal.ylnslae.mongodb.net/PLATFORM',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000,
//     },
//   )
//   .then(() => {
//     console.log('MongoDB connected successfully');
//     logDatabaseStats(); // Log database stats after successful connection
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// // Endpoint to fetch database stats
// app.get('/db-stats', async (req, res) => {
//   try {
//     const db = mongoose.connection.db;
//     const stats = await db.stats();
//     res.json(stats);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching database stats' });
//   }
// });

// // Set io instance to app to be accessed in routes
// app.set('io', io);
// app.use('/', route);

// // Start the server
// server.listen(4000, () => {
//   console.log('Server running at http://localhost:4000');
// });
