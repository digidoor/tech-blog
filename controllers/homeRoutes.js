const router = require('express').Router();
const { User, Blog } = require('../models');
//const withAuth = require('..utils/auth'); //uncomment later

router.get('/', (req, res) =>
{
	//res.sendFile(path.join(__dirname, 'public/index.html'));
	res.render('home');
});

module.exports = router;