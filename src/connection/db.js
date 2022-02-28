const { connect } = require('mongoose');

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/taskdb');
        console.log('Conectado a base de datos')
    } catch (error) {
        console.error(error);

    }
};

module.exports = {connectDB};
