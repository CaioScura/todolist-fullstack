const app = require('./app');

//acesso as variaveis de ambiente(.env)
require('dotenv').config();

//acessar PORT ou caso esteja sendo usado, acessar porta por exemplo 3333
const PORT = process.env.PORT || 3333;

//rodar server -> console.log = testar
app.listen(PORT, () => console.log(`Server running or port ${PORT}`));