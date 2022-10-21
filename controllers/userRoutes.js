const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    res.json('TESTING FROM USER-ROUTES');
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