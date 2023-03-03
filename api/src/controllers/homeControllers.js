const connection = require('../config/database');
const { getAllUsers
} = require('../service/CRUDService');


const homepage = (req, res) => {
    return res.send("home page");
}

const getListUserPage = async (req, res) => {
    let Users = await getAllUsers();
    res.json(Users);
}
module.exports = { homepage, getListUserPage }