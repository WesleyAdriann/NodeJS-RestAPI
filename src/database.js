const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '10.41.171.207',
    user: 'admin',
    password: 'admin',
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