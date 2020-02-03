//importando express para poder consumir as variaveis desta biblioteca   

const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes'); // passar caminho relativo

const app = express();

// colando string de conexão do db atlas 
mongoose.connect('mongodb+srv://omnistack:<omnistack>@cluster0-cnmkm.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

app.use(express.json()); // express receber post com o corpo em json
app.use(routes);


app.listen(3333); 







//como fazer para obter resposta, o get é um metodo de app e vai receber como parametro um caminho
// o segundo parametro desta função é uma outra função e vai ser feita como arrow function
// a arrow function recebe 2 parametros de forma automatica pelo express e são sempre fixos
// req ou request de requisição e o res de response 

//essa requisição poe conter informações- a requisição é tudo q é recebido pelo front-end
//METODOS HTTP
// os principais metodos que vamos usar é o get(receber informação), post(criar informação), put(editar recurso), delete(apaga)
//get é o unico que conseguimos acessar nativo
//para testar os outros metodos intalar insomnia.rest 
//tipos de parametros 


// escolhendo a porta que vai abrir no servidor quando a aplicação comecar a funcionar


// acessar banco de dados
//app.listen(3333); 


//mongoDB (banco não-relacional) vamos usalo pois o start é rapido e funcional. 
