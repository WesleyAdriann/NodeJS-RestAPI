const express = require('express');
const app = express();

//Configurações
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Rotas
app.use(require('./routes/routes'));

//Inicia servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor na porta: ${app.get('port')}`);
  })