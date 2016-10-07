
module.exports = ( _app ) =>{

    require('./routes/user')( _app )
    require('./routes/index')( _app )
    require('./routes/profile')( _app )
    require('./routes/errors')( _app )

}
