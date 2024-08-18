// const winston = require('winston');
//const messageController = require('../controller/msgController');

// // Function to initialize Socket.io server
// function initSocketServer(server) {
//   const io = socketIo(server);

//   io.on('connection', socket => {
//     console.log('A user connected');

//     // Listen for new messages
//     socket.on('newMessage', async data => {
//       // Save the message to the database
//       const savedMessage = await messageController.sendMessage(data);

//       // Broadcast the message to all connected clients
//       io.emit('message', savedMessage);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   return io;
// }

// module.exports = initSocketServer;

//================above code is write ======================//

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const route = require('../router/routes');
// const { initSocketServer } = require('../utils/'); // Import socket initialization function

// const app = express();
// const server = http.createServer(app); // Create HTTP server

// app.use(cookieParser());

// require('dotenv').config({
//   path: '../.env', // Adjust the path to point outside the src folder
// });

// app.use(express.json());
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
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

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
//     // Initialize Socket.io server after MongoDB connection
//     initSocketServer(server);
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// app.use('/', route);

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports = {
//   server,
// // };

// import cookie from 'cookie';
// import jwt from 'jsonwebtoken';
// import { Server, Socket } from 'socket.io';
// import { AvailableChatEvents, ChatEventEnum } from '../constants.js';
// import { User } from '../models/apps/auth/user.models.js';
// import { ApiError } from '../utils/ApiError.js';

// /**
//  * @description This function is responsible to allow user to join the chat represented by chatId (chatId). event happens when user switches between the chats
//  * @param {Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>} socket
//  */
// const mountJoinChatEvent = socket => {
//   socket.on(ChatEventEnum.JOIN_CHAT_EVENT, chatId => {
//     console.log(`User joined the chat 🤝. chatId: `, chatId);
//     // joining the room with the chatId will allow specific events to be fired where we don't bother about the users like typing events
//     // E.g. When user types we don't want to emit that event to specific participant.
//     // We want to just emit that to the chat where the typing is happening
//     socket.join(chatId);
//   });
// };

// /**
//  * @description This function is responsible to emit the typing event to the other participants of the chat
//  * @param {Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>} socket
//  */
// const mountParticipantTypingEvent = socket => {
//   socket.on(ChatEventEnum.TYPING_EVENT, chatId => {
//     socket.in(chatId).emit(ChatEventEnum.TYPING_EVENT, chatId);
//   });
// };

// /**
//  * @description This function is responsible to emit the stopped typing event to the other participants of the chat
//  * @param {Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>} socket
//  */
// const mountParticipantStoppedTypingEvent = socket => {
//   socket.on(ChatEventEnum.STOP_TYPING_EVENT, chatId => {
//     socket.in(chatId).emit(ChatEventEnum.STOP_TYPING_EVENT, chatId);
//   });
// };

// /**
//  *
//  * @param {Server<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>} io
//  */
// const initializeSocketIO = io => {
//   return io.on('connection', async socket => {
//     try {
//       // parse the cookies from the handshake headers (This is only possible if client has `withCredentials: true`)
//       const cookies = cookie.parse(socket.handshake.headers?.cookie || '');

//       let token = cookies?.accessToken; // get the accessToken

//       if (!token) {
//         // If there is no access token in cookies. Check inside the handshake auth
//         token = socket.handshake.auth?.token;
//       }

//       if (!token) {
//         // Token is required for the socket to work
//         throw new ApiError(401, 'Un-authorized handshake. Token is missing');
//       }

//       const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // decode the token

//       const user = await User.findById(decodedToken?._id).select(
//         '-password -refreshToken -emailVerificationToken -emailVerificationExpiry',
//       );

//       // retrieve the user
//       if (!user) {
//         throw new ApiError(401, 'Un-authorized handshake. Token is invalid');
//       }
//       socket.user = user; // mount te user object to the socket

//       // We are creating a room with user id so that if user is joined but does not have any active chat going on.
//       // still we want to emit some socket events to the user.
//       // so that the client can catch the event and show the notifications.
//       socket.join(user._id.toString());
//       socket.emit(ChatEventEnum.CONNECTED_EVENT); // emit the connected event so that client is aware
//       console.log('User connected 🗼. userId: ', user._id.toString());

//       // Common events that needs to be mounted on the initialization
//       mountJoinChatEvent(socket);
//       mountParticipantTypingEvent(socket);
//       mountParticipantStoppedTypingEvent(socket);

//       socket.on(ChatEventEnum.DISCONNECT_EVENT, () => {
//         console.log('user has disconnected 🚫. userId: ' + socket.user?._id);
//         if (socket.user?._id) {
//           socket.leave(socket.user._id);
//         }
//       });
//     } catch (error) {
//       socket.emit(
//         ChatEventEnum.SOCKET_ERROR_EVENT,
//         error?.message ||
//           'Something went wrong while connecting to the socket.',
//       );
//     }
//   });
// };

// /**
//  *
//  * @param {import("express").Request} req - Request object to access the `io` instance set at the entry point
//  * @param {string} roomId - Room where the event should be emitted
//  * @param {AvailableChatEvents[0]} event - Event that should be emitted
//  * @param {any} payload - Data that should be sent when emitting the event
//  * @description Utility function responsible to abstract the logic of socket emission via the io instance
//  */
// const emitSocketEvent = (req, roomId, event, payload) => {
//   req.app.get('io').in(roomId).emit(event, payload);
// };

// export { initializeSocketIO, emitSocketEvent };

//const socketIo = require('socket.io');

// let ioInstance;

// function initSocketServer(server) {
//   const io = socketIo(server);

//   io.on('connection', socket => {
//     console.log('A user connected');

//     // Listen for new messages
//     socket.on('newMessage', async data => {
//       // Save the message to the database
//       const savedMessage = await messageController.sendMessage(data);

//       // Broadcast the message to all connected clients
//       io.emit('message', savedMessage);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   ioInstance = io; // Store the io instance

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };

// const port = 400;
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.simple(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' }), // Log all messages to a file
//   ],
// });

// let ioInstance;

// function initSocketServer(server) {
//   const io = socketIo(server);

//   io.on('connection', socket => {
//     logger.info('A user connected');

//     // Listen for new messages
//     socket.on('newMessage', async data => {
//       // Save the message to the database
//       const savedMessage = await messageController.sendMessage(data);

//       // Broadcast the message to all connected clients
//       io.emit('message', savedMessage);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//       logger.info('A user disconnected');
//     });
//   });

//   ioInstance = io; // Store the io instance

//   // Log only when the server starts listening for connections
//   server.on('listening', () => {
//     logger.info('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };

// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// //const io = new Server(server);

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.simple(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' }), // Log all messages to a file
//   ],
// });

// let ioInstance;

// function initSocketServer(server) {
//   const io = socketIo(server);

//   io.on('connection', socket => {
//     logger.info('A user connected');

//     // Listen for test event
//     socket.on('testEvent', data => {
//       logger.info('Test event received:', data);
//     });

//     // Listen for new messages
//     socket.on('newMessage', async data => {
//       // Save the message to the database
//       const savedMessage = await messageController.sendMessage(data);

//       // Broadcast the message to all connected clients
//       io.emit('message', savedMessage);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//       logger.info('A user disconnected');
//     });
//   });

//   ioInstance = io; // Store the io instance

//   // Log only when the server starts listening for connections
//   server.on('listening', () => {
//     logger.info('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };

// Import the Socket.IO server class
//const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.simple(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' }), // Log all messages to a file
//   ],
// });

// let ioInstance;

// // Pass 'io' from 'socket.io' as an argument
// function initSocketServer(server, io) {
//   // Make sure 'io' is defined
//   if (!io) {
//     throw new Error('Socket.IO instance is not provided');
//   }

//   io.on('connection', socket => {
//     logger.info('A user connected');

//     // Listen for test event
//     socket.on('testEvent', data => {
//       logger.info('Test event received:', data);
//     });

//     // Listen for new messages
//     socket.on('newMessage', async data => {
//       // Save the message to the database
//       const savedMessage = await messageController.sendMessage(data);

//       // Broadcast the message to all connected clients
//       io.emit('message', savedMessage);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//       logger.info('A user disconnected');
//     });
//   });

//   ioInstance = io; // Store the io instance

//   // Log only when the server starts listening for connections
//   server.on('listening', () => {
//     logger.info('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };
// let ioInstance;

// function initSocketServer(server, io) {
//   io.on('connection', socket => {
//     console.log('A user connected');

//     // Listen for custom events from the client
//     socket.on('testEvent', data => {
//       console.log('Test event received:', data);
//     });

//     socket.on('newMessage', async data => {
//       // Handle new message event
//       // You can implement message handling logic here
//     });

//     // Handle disconnection
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   ioInstance = io; // Store the io instance

//   // Emit a test event
//   io.emit('testEvent', 'This is a test message from the server');

//   server.on('listening', () => {
//     console.log('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };
// const socketIo = require('socket.io');
// let ioInstance;

// function initSocketServer(server, io) {
//   io.on('connection', socket => {
//     console.log('A user connected');

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   // Listen for test event from API
//   io.on('testEvent', data => {
//     console.log('Test event received from API:', data);
//   });

//   ioInstance = io;

//   server.on('listening', () => {
//     console.log('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };
// const socketIo = require('socket.io');
// let ioInstance;

// function initSocketServer(server, io) {
//   io.on('connection', socket => {
//     console.log('A user is connected');

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   // Listen for test event from API
//   io.on('testEvent', data => {
//     console.log('Test event received from API:', data);
//   });

//   ioInstance = io;

//   server.on('listening', () => {
//     console.log('Socket.IO server listening on port', server.address().port);
//   });

//   return io;
// }

// function getIoInstance() {
//   return ioInstance;
// }

// module.exports = { initSocketServer, getIoInstance };
