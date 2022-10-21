const router = require('express').Router();
const { User } = require('../models');
const Task = require('../models/Task');

router.get('/', async (req, res) => {
    // res.json('TESTING FROM USER-ROUTES');
    try {
        const userData = await User.findAll({include: [{model: Task}]});
        res.status(200).json({userData});
    } catch (err) {
        res.status(400).json({ msg: 'something went wrong'});
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json({ msg: 'we got your information', userData});
    } catch (err) {
        res.status(400).json({ msg: 'something went wrong'});
    }
});

module.exports = router;