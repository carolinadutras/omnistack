const { Router } = require('express');// quando eu quero importar algo expecifico da inha biblioteca posso usar chaves
const axios = require('axios');

const routes = Router();
// a partir disso eu tenho todos meus metodos https

routes.post('/devs', async (request, response)=>{
    const {github_username}=(request.body); 

    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    // a api do githum pode demorar- estudar mais tarde promisse - usar flag async no post e await pra esperar a api responder

console.log(response.data)

    return response.json({message: 'Hello omnistack blábá nodemon! outra coisa uhuu'});
});

module.exports = routes;


