const Course = require('../models/course');

const createCourse = async (req, res) => {
    try {
        const { name, description, teacher, price, startDate, endDate } = req.body;

        const newCourse = new Course({
            name,
            description,
            teacher, 
            price,
            startDate,
            endDate,
        });

        await newCourse.save();
        res.status(201).json({ success: true, message: 'Course created successfully', course: newCourse });
    } catch (error) {
        console.error("Error creating course:", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher', 'name').populate('studentsEnrolled', 'name');
        res.status(200).json({ success: true, courses });
    } catch (error) {
        console.error("Error fetching courses:", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id).populate('teacher', 'name').populate('studentsEnrolled', 'name');

        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, course });
    } catch (error) {
        console.error("Error fetching course by ID:", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, message: 'Course updated successfully', course: updatedCourse });
    } catch (error) {
        console.error("Error updating course:", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, message: 'Course deleted successfully' });
    } catch (error) {
        console.error("Error deleting course:", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};
