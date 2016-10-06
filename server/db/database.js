const mongoose = require('mongoose');
const configMongo = require('./config/db');

module.exports = () => {
    mongoose.connect( configMongo.url );
    const db = mongoose.connection
    db.on('error', error )
    db.once('open', open )
}

const error = ( error ) => {
    console.log( " ** No se pudo establecer conexion a la base de datos ** " )
    console.log( error )
}


const open = ( ) => {
    console.log(" ** Se establecio conexion a la base de datos **")
}
