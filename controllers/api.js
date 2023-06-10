const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/users', async (req, res) =>
{
	try
	{
		const userData = await User.findAll({
			attributes: { exclude: ['password'] },
			order: [['name', 'ASC']],
		});
		const users = userData.map( user => user.get({plain:true}));
		// res.render('home', {
		// 	users,
		// 	logged_in: req.session.logged_in
		// });
		console.log("users: ", users);
		res.status(200).json(users);
	} catch (error) { res.status(500).json(error); }
});

router.get('/blogs', async (req, res) =>
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
		// res.render('home', {
		// 	users,
		// 	logged_in: req.session.logged_in
		// });
		console.log("blogs: ", blogs);
		res.status(200).json(blogs);
	} catch (error) { res.status(500).json(error); }
});

module.exports = router;
