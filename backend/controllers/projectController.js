const asyncHandler = require('express-async-handler');
const upload = require('../config/multer');
const Project = require('../models/projectModel')
const User = require('../models/userModel')

const getAllProjects = asyncHandler(async(req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects)
});

const getProjects = asyncHandler(async(req, res) => {
  const projects = await Project.find({user: req.user.id});
  res.status(200).json(projects)
});

const postProject = asyncHandler(async (req, res) => {
  upload(req, res, async () => {
    const { title, description, currentMembers, requiredMembers, type, relatedLinks, suggestions } = req.body;
    if (!title || !description  || !requiredMembers) {
      res.status(400)
      throw new Error("Please add required fields.");
    }
    const projectData = {
      user: req.user.id,
      title,
      description,
      currentMembers : [req.user.id],
      requiredMembers,
      type,
      relatedLinks,
      suggestions
    };
    if (req.file) {
      projectData.image = {
        data: req.file.filename,
        contentType: 'image'
      };
    };
    const project = await Project.create(projectData);
    res.status(200).json(project);
  })
});

const updateProject = asyncHandler(async(req, res) => {
  upload(req, res, async (err) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(400);
      throw new Error("Project not found.");
    };
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401);
      throw new Error("User not found.");
    };
    if (project.user.toString() !== user.id) {
      res.status(402);
      throw new Error("Not authorized");
    }
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (req.file) {
      updatedProject.image = {
        data: req.file.filename,
        contentType: 'image'
      };
    };
    await updatedProject.save();
    res.status(200).json(updatedProject)
  });
});

const deleteProject = asyncHandler(async(req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("Project not found.");
  };
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found.");
  };
  if (project.user.toString() !== user.id) {
    res.status(402);
    throw new Error("Not authorized");
  };
  await project.deleteOne();
  res.status(200).json({id: req.params.id });
});

module.exports = {
  getAllProjects,
  getProjects,
  postProject,
  updateProject,
  deleteProject
}