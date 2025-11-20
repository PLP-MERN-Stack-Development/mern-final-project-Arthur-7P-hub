import express from "express";
import Job from "../models/Job.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Get all jobs
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find().populate("createdBy", "name email").sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create job
router.post("/", auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const job = new Job({ title, description, createdBy: req.user.id });
    await job.save();

    // Emit to Socket.io
    req.io.emit("newJob", job);

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
