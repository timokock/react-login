const express = require('express')
const PORT = process.env.PORT || 4000
const app = express()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSix2019',
    database: 'users'
})

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

connection.connect(function(err){
    (err)? console.log(err): console.log(connection)
    
})

require('./routes/html-routers')(app, connection)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    
})