import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// Create project
router.post("/create", async (req, res) => {
  try {
    const { title, description, budget } = req.body;
    const project = new Project({ title, description, budget });
    await project.save();
    res.json({ message: "Project created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

export default router;
