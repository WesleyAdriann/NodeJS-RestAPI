const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/', (req, res) => {
    res.end("Rotas: /tb_pcs /tb_response")
})

router.get('/tb_pcs', (req, res) => {
    mysqlConnection.query('select * from tb_pcs;', (err, rows, fiels) => {
       if(!err) {
           res.json(rows);   
       } else {
           console.log(err);
       }
    })  
});

router.get('/tb_response', (req, res) => {
    mysqlConnection.query('select * from tb_response;', (err, rows, fiels) => {
       if(!err) {
           res.json(rows);
       } else {
           console.log(err);
       }
    })  
});

router.get('/tb_pcs/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query(`select * from tb_pcs where pat= ? ;`, [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0])
        }else {
            console.log(err);
        }
    })
})

router.post('/tb_pcs', (req, res) => {
    const { nome, pat, modelo, setor, sala} = req.body;
    mysqlConnection.query(`INSERT INTO tb_pcs values ( ?, ?, ?, ?, ?);`, [nome, pat, modelo, setor, sala], (err, rows, fields) => {
        if(!err) {
            res.json({Status: "OK"});
        }else {
            res.json({Status: 'Não foi Criado' , Erro: err});
        }
    })
})

router.put('/tb_pcs/:pat', (req, res) => {
    const {nome, modelo, setor, sala} = req.body;
    const { pat } = req.params;
    mysqlConnection.query('update tb_pcs set nome = ?, modelo = ?, setor = ?, sala = ? where pat = ?;', [nome, modelo, setor, sala, pat], (err) => {
        if(!err) {
            res.json({Status : "OK"});
        }else {
            res.json({Status: "Erro", Erro: err});
        }
    })
})

router.delete('/tb_pcs/:pat', (req, res) => {
    const { pat } = req.params;
    mysqlConnection.query('delete from tb_pcs where pat = ?', [pat], (err) => {
        if(!err) {
            res.json({Status : "OK"});
        }else {
            res.json({Status: "Erro", Erro: err});
        }
    })
})

// router.post('/', (req, res) => {
//     const { id, nome, telefone} = req.body;
//     const query = ' call usersAddOrEdit( ?, ?, ?);';
//     mysqlConnection.query(query, [id, nome, telefone], (err, rows, fields) => {
//         if(!err) {
//             res.json({Status: 'Usuario criado'});
//         }else {}
//     })
// })


module.exports = router;