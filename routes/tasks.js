const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Task = require('../models/Task');


// @route   GET api/tasks
// @desc    Get all users tasks
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route   POST api/tasks
// @desc    Add new task
// @access  Private
router.post('/', [auth, [
    check('title', 'Title is required')
        .not()
        .isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { title, description, type, isDone } = req.body;
    try {
        const newTask = new Task({
            title,
            description,
            type,
            isDone,
            user: req.user.id
        });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/tasks/:id
// @desc    Update certain task
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, description, type, isDone } = req.body;
    // Build task object
    const taskFields = {};

    if (title) taskFields.title = title;
    if (description) taskFields.description = description;
    if (type) taskFields.type = type;
    if (isDone) taskFields.isDone = isDone;
    try {
        const { id } = req.params;
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        // Make sure user owns task
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        task = await Task.findByIdAndUpdate(id,
            { $set: taskFields },
            { new: true });
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/tasks/:id
// @desc    Delete certain task
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    const { title, description, type, isDone } = req.body;
    // Build task object
    const taskFields = {};

    if (title) taskFields.title = title;
    if (description) taskFields.description = description;
    if (type) taskFields.type = type;
    if (isDone) taskFields.isDone = isDone;
    try {
        const { id } = req.params;
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        // Make sure user owns task
        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Task.findByIdAndRemove(id);
        res.json({ msg: 'Task removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;