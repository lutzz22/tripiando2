const mysql = require('mysql')
const info = require('./db.config')

const request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: info.HOST,
        port:'3306',
        user: info.USER,
        password: info.PASSWORD,
        database: info.DB
    })

    connection.query(query, (error, data, fields) => {
        if(error) rej(error)

        connection.end((err) => {
            if(err) rej(err)
            res(data)
        })
    })
})

module.exports={
    request
}
