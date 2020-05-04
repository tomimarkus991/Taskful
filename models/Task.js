const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        unique: true,
    },
    type: {
        type: String,
        default: 'Not important'
    },
    isDone: {
        type: String,
        default: false
    },
    Date: {
        type: String,
        default: Date.now,
    },
});

module.exports = mongoose.model('task', TaskSchema);