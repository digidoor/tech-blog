const router = require('express').Router();

router.get('/', (req, res) =>
{
    //res.sendFile(path.join(__dirname, 'public/index.html'));
    res.render('home');
});

router.get('/handle', (req, res) =>
{
    //res.sendFile(path.join(__dirname, 'public/index.html'));
    res.render('home');
});

module.exports = router;