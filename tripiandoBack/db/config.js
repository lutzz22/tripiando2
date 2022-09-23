const mysql = require('mysql')

const request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host:'localhost',
        port:'3306',
        user: 'root',
        password: '',
        database: 'tripiando'
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
