const mongoose = require('mongoose')

// é a estruturação de um dado no banco de dados
// é um metodo padrão e vai se repetir toda vez que for criar um model, está na documentação do mongoose
const DevSchema = new mongoose.Schema({ 
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],

});

module.exports = mongoose.model('Dev', DevSchema);