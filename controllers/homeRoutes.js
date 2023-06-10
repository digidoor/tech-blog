const router = require('express').Router();
const { User, Blog } = require('../models');
//const withAuth = require('..utils/auth'); //uncomment later

router.get('/', async (req, res) =>
{
	try
	{
		const blogData = await Blog.findAll({
			attributes: { exclude: ['createdAt', 'updatedAt'] },
			order: [['title', 'ASC']],
			include: [
				{
					model: User,
					attributes: ['name'],
				},
			],
		});
		const blogs = blogData.map( blog => blog.get({plain:true}));
		res.render('home', {
			blogs,
			logged_in: req.session.logged_in
		});
		console.log("blogs: ", blogs);
		//res.status(200).json(blogs);
	} catch (error) { res.status(500).json(error); }
});

module.exports = router;