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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query(`select * from tb_users where id= ? `, [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0])
        }
    })
})

router.post('/', (req, res) => {
    const { id, nome, telefone} = req.body;
    const query = `
        set @id = ?;
        set @nome = ?;
        set @telefone = ?;
        call usersAddOrEdit(@id, @nome, @salario);
    `;
    mysqlConnection.query(query, [id, nome, telefone], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Usuario criado'});
        }else {}
    })
})


module.exports = router;