
const Sequelize = require('sequelize');
const sequelize = new Sequelize('qlbanlaptop', 'root', '2809', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});
module.exports = sequelize;