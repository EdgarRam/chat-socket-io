
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection


const error = ( error ) => {
    console.log( " ** No se pudo establecer conexion a la base de datos ** " )
    console.log( error )
}


const open = ( ) => {
    console.log(" ** Se establecio conexion a la base de datos **")
}




db.on('error', error )
db.once('open', open )
