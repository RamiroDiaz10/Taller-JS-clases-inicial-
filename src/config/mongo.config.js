import mongoose from `mongoose`;

MONGO_URI = 'mongodb://localhost:27017/taller-clases';

const dbConnection  = async () => {

    try {
        await mongoose.connect(MONGO_URI, {});
        console.log('Base de datos conectada');

    } catch (error) {
        console.log(error);
        console.log('Error al conectar la base de datos');
    }

}


export default dbConnection; 