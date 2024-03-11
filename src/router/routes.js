const express = require('express');

const router = express.Router();
const { authenticate, authorization } = require('../middleware/mid');

const {
  register,
  login,
  avatar,
  profile,
  forgotpassword,
  resetPasswordtoken,
  updateUserProfile,
  userVisibility,
  userIncountry,
  UpdateUserIdskills,
  getUser,
  UpdateTiTleDescription,
  updatekind,
  getProfileUsinId,
  updateprofileUsingId,
  editprofile,
  emailverify,
  RefreshToken,
  logoutUser,
} = require('../controller/userController');

const {
  createtask,
  gettaskById,
  gettasksUserByuserId,
  gettask,
} = require('../controller/taskController.js');

const {
  bonus,
  getBonuse,
  userUserIdClaimBonusByBonusId,
} = require('../controller/bonusController.js');

const {
  jobPost,
  getJobUsingUserId,
  getJobs,
  getjobsjobId,
} = require('../controller/jobController.js');

const { upload } = require('../middleware/multer');

//= =======================user router==============================//

router.post('/set-profile/:userId', authenticate, authorization, profile); // Corrected route paths
router.post('/register', register);
router.post('/refresh-token', RefreshToken);
router.post('/forgot-password', forgotpassword);
router.post('/login', login);
router.post('/logoutUser', authenticate, logoutUser);
router.post('/user/avatar', authenticate, upload.single('avatar'), avatar); // Corrected route paths
router.post('/reset-password/:token', resetPasswordtoken);
router.patch(
  '/user/:userId/country',
  authenticate,
  authorization,
  userIncountry,
);
router.get('/profile/:userId', updateUserProfile); // done
router.patch(
  '/user/:userId/visibility',
  authenticate,
  authorization,
  userVisibility,
); // done
router.patch(
  '/user/:userId/skills',
  authenticate,
  authorization,
  UpdateUserIdskills,
); // done
router.get('/user', authenticate, getUser); // done
router.patch(
  '/profile/:userId',
  authenticate,
  authorization,
  UpdateTiTleDescription,
); // done
router.patch(
  '/user/:userId/update-kind',
  authenticate,
  authorization,
  updatekind,
); //   done
router.get(
  '/get-profile/:userId',
  authenticate,
  authorization,
  getProfileUsinId,
); // done
router.put(
  '/update-profile/:userId',
  authenticate,
  authorization,
  updateprofileUsingId,
); // done
router.patch('/edit-profile/:userId', authenticate, authorization, editprofile); // done
router.get('/email-verify', emailverify);

//= ==========================  task route ==========================//

router.post('/create-task', authenticate, createtask);
router.get('/task/:taskId', gettaskById);
router.get('/tasks/user/:userId', authenticate, gettasksUserByuserId);
router.get('/tasks', authenticate, gettask);

//= ====================Bonous router===============================//
router.post('/bonus', authenticate, bonus);
router.post(
  '/user/:userId/claim-bonus/:bonusId',
  authenticate,
  userUserIdClaimBonusByBonusId,
);
router.get('/bonuses', authenticate, getBonuse);

//= ===================job router====================//
router.post('/post-job', authenticate, jobPost);
router.get('/user/:userId/job-posts', authenticate, getJobUsingUserId);
router.get('/api/jobs', authenticate, getJobs);
router.get('/api/jobs/:jobId', getjobsjobId);

module.exports = router; // Exporting the router directly
