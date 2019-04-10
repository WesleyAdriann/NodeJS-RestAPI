const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('select * from tb_users', (err, rows, fiels) => {
       if(!err) {
           res.json(rows);
       } else {
           console.log(err);
       }
    })
    
});

module.exports = router;