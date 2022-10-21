const Task = require('./Task');
const User = require('./User');

User.hasMany(Task, {
    foreignKey: "user_id",
    onDelete: 'CASCADE',
});

Task.belongsTo(User, {
    foreignKey: 'user_id',
});