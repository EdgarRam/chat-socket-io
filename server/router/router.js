
module.exports = ( _app ) =>{

    require('./routes/user')( _app )
    require('./routes/index')( _app )

}
