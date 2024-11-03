const express = require('express');
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

const router = express.Router();

//create a course
router.post('/create', createCourse);

//get all courses
router.get('/all', getAllCourses);

//get a specific course by ID
router.get('/:id', getCourseById);

//update a specific course by ID
router.patch('/:id', updateCourse);

//delete a specific course by ID
router.delete('/:id', deleteCourse);

module.exports = router;
