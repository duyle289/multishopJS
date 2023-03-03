const express = require('express');
const app = express();
const homeRouters = require('../src/route/homeRouters');
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 8080




app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', homeRouters)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
})