const express = require('express');
const router = express.Router();


// @route   GET api/tasks
// @desc    Get all users tasks
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all tasks');
});

// @route   POST api/tasks
// @desc    Add new task
// @access  Private
router.post('/', (req, res) => {
    res.send('Add new task');
});

// @route   PUT api/tasks/:id
// @desc    Update certain task
// @access  Private
router.put('/:id', (req, res) => {
    res.send(`Update certain task`);
});

// @route   DELETE api/tasks/:id
// @desc    Delete certain task
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete certain task');
});

module.exports = router;