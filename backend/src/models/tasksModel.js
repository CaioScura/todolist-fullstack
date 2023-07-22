//pasta models = armazenar todos arquivos e funções que vao acessar diretamente o banco de dados
//

const conection = require('./connection');

//retornar todas as tasks que estao no banco de dados
//essa função é assincrona, ou seja, tem que esperar o processamento(await -> so utiliza em funções assincronas)
const getAll = async() => {
    const tasks = await conection.execute('SELECT * FROM tasks');
    return tasks;
};

//exportar
module.exports = {
    getAll
}