const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelizeOptions = {
    host: process.env.DATABASE_URL,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: 'postgres',
};

const sequelize = new Sequelize(sequelizeOptions);

const db = { Sequelize, sequelize };

db.posts = require('./models/postModel')(sequelize, DataTypes);
db.users = require('./models/userModel')(sequelize, DataTypes);


sequelize.authenticate()
    .then(() => {
        console.log('DATABASE: Connection has been established successfully');

        db.sequelize.sync({ force: false })
            .then(() => {
                console.log('sync database is completed')
            });
    })
    .catch((err) => {
        console.error('DATABASE: Unable to connect to the database - ' + err);
    });

module.exports = db;
