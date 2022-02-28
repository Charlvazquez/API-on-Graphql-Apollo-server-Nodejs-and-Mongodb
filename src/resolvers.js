const Task = require('./models/Task');

const resolvers = {
    Query: {
        hello: () => "Hello world",
        //consulta de todos los datos
        getAllTask: async () => {
            const tasks = await Task.find()
            return tasks
        },
        //consulta por Id, al momento de agregar id seria el tipo de campo a usar
        //al momento de usar args no solo buscara el id sino tambien los demas campos que se soliciten 
        async getTask(_, { id }) {
            const task = await Task.findById(args.id)
            return task

        }
    },
    Mutation: {
        //mutacion para insertar datos
         crearTask: async(_, args) =>{
            const { titulo, descripcion, tema } = args.task;
            const newTask = new Task({ titulo, descripcion, tema  });
            await newTask.save();
            return newTask;
          },
        //metodo para eliminar datos
        async eliminarTask(_, { id }) {
            await Task.findByIdAndDelete(id);
            return 'Tarea Eliminada';
        },
       async actualizarTask(_,{task, id}){
           const actualizarTask = await Task.findByIdAndUpdate(id, {
               //si se quiere seleccionar algo a editar se agregaria de esta manera
               $set: task
           }, {new:true})

           return actualizarTask
        },
    },
};
module.exports = { resolvers };