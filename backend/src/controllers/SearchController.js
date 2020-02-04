const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
    async index (request, response){
        const {latitude, longitude, techs}= request.query;

        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);

        const devs = await Dev.find({
            techs : {
                $in: techsArray,
            },
        })
        //buscar todos devs num raio de 10km
        //filtrar por tecnologias
        return response.json({devs: []})
    }
}