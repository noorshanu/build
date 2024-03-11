const mongoose = require('mongoose');
const JobPostModel = require('../model/jobspostmodel');

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 154500,
// });

// app.use(limiter);

const jobPost = async (req, res) => {
  const {
    jobTitle,
    jobType,
    jobTiming,
    jobRequirements,
    salaryType,
    salaryMin,
    salaryMax,
    salaryRate,
    supplementalPay,
    benefits,
    language,
    hiringAmount,
    hiringUrgency,
  } = req.body;

  const _jobPost = new JobPostModel({
    userId: req.userId, // from authenticate middleware
    jobTitle,
    jobType,
    jobTiming,
    jobRequirements,
    salaryType,
    salaryMin,
    salaryMax,
    salaryRate,
    supplementalPay,
    benefits,
    language,
    hiringAmount,
    hiringUrgency,
  });

  try {
    await _jobPost.save();
    res.status(201).json({
      status: true,
      message: 'Job posted successfully',
      jobId: _jobPost._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating job post' });
  }
};

// Endpoint to get all job posts for a user
const getJobUsingUserId = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(404).send({ status: false, msg: 'Invalid userID' });
  }

  if (req.userId !== userId) {
    return res.status(401).json({ status: false, msg: 'Unauthorized' });
  }

  try {
    const jobPosts = await JobPostModel.find({ userId });
    if (jobPosts.length === 0) {
      return res
        .status(404)
        .json({ status: false, msg: 'No jobs found with this userId' });
    }
    res
      .status(200)
      .json({ msg: 'Job posts fetched successfully', data: jobPosts });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Error fetching job posts' });
  }
};

const getjobsjobId = async (req, res) => {
  const { jobId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(jobId))
    return res.status(404).send({ msg: 'Invalid ID' });
  try {
    const job = await JobPostModel.findById(jobId).populate(
      'userId',
      'username email FullName',
    );
    if (!job) {
      return res
        .status(404)
        .send({ status: false, msg: 'Job not with this jobId found' });
    }
    res
      .status(200)
      .json({ status: true, msg: 'job fetch successfully', data: job });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Server error' });
  }
};

const getJobs = async (req, res) => {
  const page = Number(req.query.page) || 1; // la pagina corrente, default 1
  const limit = Number(req.query.limit) || 10; // il numero di elementi per pagina, default 10

  try {
    const jobPosts = await JobPostModel.find({})
      .populate('userId', 'FullName country')
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await JobPostModel.countDocuments(); // conta il totale dei documenti

    res.json({
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      jobPosts,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Error fetching job posts' });
  }
};

module.exports = { jobPost, getJobUsingUserId, getJobs, getjobsjobId };
