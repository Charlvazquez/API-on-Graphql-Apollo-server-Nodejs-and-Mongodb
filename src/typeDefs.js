const {gql} = require('apollo-server-express');

const typeDefs = gql`
#datos a especificar para el modelo creado
type Task{
    id: ID
    titulo: String
    descripcion: String
    tema: String
}
#las queries son para consultar datos
type Query{
    hello:String
    getAllTask: [Task]
    getTask(id:ID): Task
}
#mutations son para agregar datos en la base de datos de graphql
input TaskInput {
    titulo: String
    descripcion: String
    tema: String
  }

type Mutation{
    crearTask(task: TaskInput!): Task
    #al momento de requerir algun campo se agrega un ! para mostrar que se requiere
    eliminarTask(id: ID!): String
    actualizarTask(id: ID!,task: TaskInput):Task
}
`
module.exports ={typeDefs}