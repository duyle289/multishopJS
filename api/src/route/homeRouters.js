const express = require('express')
const router = express.Router()
const { homepage, getListUserPage
} = require('../controllers/homeControllers')
// middleware that is specific to this routers
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
router.get('/', homepage)
router.get('/list', getListUserPage)
module.exports = router