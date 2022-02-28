const express = require('express');
const app = express();
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./src/typeDefs');
const {resolvers} = require('./src/resolvers');
const { connectDB } = require('./src/connection/db');
connectDB()

//ruta basica para REST API
app.get('/',(req,res)=>{
    res.send('Bienvenido!')
});


module.exports = app;
//Inclusion de servidor de Apollo y GraphQL
async function start(){
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app})
//mensaje de pagina no encontrada
app.use('*',(req,res)=>{
    res.status(404).send('Pagina no encontrada')
});

//Puerto para servidor de Express
    app.listen(3000,()=>{
        console.log('Servidor en puerto http:localhost: 3000')
    })
}

start()