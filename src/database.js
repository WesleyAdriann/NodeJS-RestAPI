const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: '3306',
    database: 'db_restapi',
})

mysqlConnection.connect(err => {
    if(err) {
        console.log("Não Foi possivel conectar",err);
        return;
    }else {
        console.log("Conectado ao BD");
    }
});

module.exports = mysqlConnection;