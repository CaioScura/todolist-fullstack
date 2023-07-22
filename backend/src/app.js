const express = require('express');
const router = require('./router');

const app = express(); //app instancia do express

//toda requisição da aplicação, "caira" no router
app.use(router);

//exportar para poder utilizar o app em outro arquivo
module.exports = app;