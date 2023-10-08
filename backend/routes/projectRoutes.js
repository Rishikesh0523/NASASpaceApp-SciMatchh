const express = require('express');
const { getAllProjects, getProjects, postProject, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/all', protect, getAllProjects);

router.get('/', protect, getProjects);

router.post('/', protect, postProject);

router.put('/:id', protect, updateProject);

router.delete('/:id', protect, deleteProject);

module.exports = router;