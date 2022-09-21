module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        title: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.TEXT,
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post: {
            type: DataTypes.INTEGER,
        },
        published: {
            type: DataTypes.BOOLEAN,
        },
    });
};
