const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'CASCADE', });
//above line was after the export in our project; 
module.exports = { User, Blog };
