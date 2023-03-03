const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Kết nối đến cơ sở dữ liệu

const User = sequelize.define('KHACHHANG', {
    // Các thuộc tính của bảng users
    MAKH: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    TENKH: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DIACHI: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    USERNAME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SDT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CCCD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NGAYSINH: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TRANGTHAI: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = User;