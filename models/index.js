const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'CASCADE', });
Blog.belongsTo(User, { foreignKey: 'user_id' });
//above line was after the export in our project; 
module.exports = { User, Blog };
