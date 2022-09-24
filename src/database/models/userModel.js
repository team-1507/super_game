module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
    });
};
