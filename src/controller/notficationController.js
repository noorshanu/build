const NotificationModel = require('../model/notificationModel');

const SendNotifications = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({
        status: false,
        msg: 'Please provide senderId, receiverId, and message.',
      });
    }

    const notification = await NotificationModel.create({
      userId,
      message,
    });

    return res.status(201).json({
      status: true,
      msg: 'Notification created successfully.',
      data: notification,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: 'Internal server error.',
    });
  }
};

// const GetNotifications = async (req, res) => {
//   try {
//     const { userId, page = 1, limit = 10 } = req.params;

//     // Validate userId
//     if (!userId) {
//       return res.status(400).json({
//         status: false,
//         msg: 'Please provide a valid userId.',
//       });
//     }

//     // Build query to fetch all notifications for the given user
//     const query = { userId };

//     // Pagination logic
//     const skip = (page - 1) * limit;

//     // Fetch notifications
//     const notifications = await NotificationModel.find(query)
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(parseInt(limit, 10));

//     // Count total notifications for pagination metadata
//     const totalNotifications = await NotificationModel.countDocuments(query);

//     // Return success response
//     return res.status(200).json({
//       status: true,
//       msg: 'Notifications fetched successfully.',
//       data: notifications,
//       meta: {
//         currentPage: parseInt(page, 10),
//         totalPages: Math.ceil(totalNotifications / limit),
//         totalNotifications,
//       },
//     });
//   } catch (error) {
//     // Return error response
//     console.error('Error fetching notifications:', error.message);
//     return res.status(500).json({
//       status: false,
//       msg: 'Internal server error.',
//     });
//   }
// };

const GetNotifications = async (req, res) => {
  try {
    const { userId } = req.params; // Correct way to fetch userId from URL parameters
    const { page = 1, limit = 10 } = req.query; // Fetch page and limit from query parameters

    if (!userId) {
      return res.status(400).json({
        status: false,
        msg: 'Please provide a valid userId.',
      });
    }

    const query = { userId };
    const skip = (page - 1) * limit;

    // Fetch notifications
    const notifications = await NotificationModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit, 10));

    const totalNotifications = await NotificationModel.countDocuments(query);

    if (notifications.length === 0) {
      return res.status(200).json({
        status: true,
        msg: 'No notifications found.',
        data: [],
        meta: {
          currentPage: parseInt(page, 10),
          totalPages: Math.ceil(totalNotifications / limit),
          totalNotifications,
        },
      });
    }

    return res.status(200).json({
      status: true,
      msg: 'Notifications fetched successfully.',
      data: notifications,
      meta: {
        currentPage: parseInt(page, 10),
        totalPages: Math.ceil(totalNotifications / limit),
        totalNotifications,
      },
    });
  } catch (error) {
    console.error('Error fetching notifications:', error.message);
    return res.status(500).json({
      status: false,
      msg: 'Internal server error.',
    });
  }
};

const MarkNotificationAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;

    if (!notificationId) {
      return res.status(400).json({
        status: false,
        msg: 'Please provide a valid notification ID.',
      });
    }

    const notification = await NotificationModel.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true },
    );

    if (!notification) {
      return res.status(404).json({
        status: false,
        msg: 'Notification not found.',
      });
    }

    return res.status(200).json({
      status: true,
      msg: 'Notification marked as read.',
      data: notification,
    });
  } catch (error) {
    console.error('Error updating notification:', error.message);
    return res.status(500).json({
      status: false,
      msg: 'Internal server error.',
    });
  }
};
module.exports = {
  SendNotifications,
  GetNotifications,
  MarkNotificationAsRead,
};
