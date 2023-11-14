const express = require('express')
const app = express()
const port = 3000
var config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
var mysql = require('mysql')
var connection = mysql.createConnection(config)

let sql = `INSERT INTO people(name) values('Alessandro')`
connection.query(sql)

app.get('/', (req, res) => {
    let html = '<h1>Full Cycle Rocks!</h1>'

    let sql = `SELECT name from people`;
    
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;

        for (const result of results) {
            html += `Name: ${result.name}<br/>`;
        }
        res.send( html )
        console.log('Resultado: ', results);
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})