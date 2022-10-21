const router = require('express').Router();
const { Task } = require('../models');

router.get('/', (req, res) => {
    res.json('TESTING FROM TASK-ROUTES');
});

router.post('/', async (req, res) => {
    try {
        const taskData = await Task.create(req.body);
        res.status(200).json({ msg: 'we got your task information', taskData });
    } catch (err) {
        res.status(400).json({ msg: 'something went wrong'});
    }
});

module.exports = router;