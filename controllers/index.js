const router = require('express').Router();

router.get('/', (req, res) =>
{
    res.json({ name: 'bob', role: 'be bob' });
});


module.exports = router;