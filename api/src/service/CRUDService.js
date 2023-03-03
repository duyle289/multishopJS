const connection = require('../config/database');
const User = require('../models/user');


const getAllUsers = async () => {
    try {
        const users = await User.findAll(); // Lấy tất cả người dùng từ cơ sở dữ liệu
        return users;// Trả về danh sách người dùng dưới dạng JSON
    } catch (error) {
        console.error(error);
        return error;
    }
}

module.exports = {
    getAllUsers
}