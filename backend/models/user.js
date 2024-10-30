// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,   
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        required: true,
    },
    coursesEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],
    coursesTeaching: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
