const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('convert')
});

router.post('/', (req, res) => {
    const obj = req.body.loadout
    res.send(obj);
});

module.exports = router;