
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    }],
    price: {
        type: Number,
        default: 0,
    },
    
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    homeworkSubmissions: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        filePath: {
            type: String,
            required: true,
        },
        submittedAt: {
            type: Date,
            default: Date.now,
        }
    }]
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Course', courseSchema);
