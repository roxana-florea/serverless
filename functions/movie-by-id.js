const movies = require('../data/movies.json');
//cauta film dupa id
exports.handler = async ({queryStringParameters}) => {
    //parameters = ce adaugi la finalul urlului
    const {id} = queryStringParameters;
    //if movie that matchesz the id
    const movie = movies.find(m => m.id === id);
 //return 404 if no movie found
 if(!movie) {
    return {
        statusCode: 404,
        body: 'Not found'
    };
      
 }
//if movie found return movie
 return {
    statusCode: 200,
    body: JSON.stringify(movie)
 }
}

//adauga idu filmului in url like so : <?id=movieid>