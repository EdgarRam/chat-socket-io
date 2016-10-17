var fs = require('fs')
var pathRoutes = "/routes"

module.exports = ( _app ) =>{

    var PATH = __dirname + pathRoutes
    var FILES = fs.readdirSync(PATH)

    for( const file in FILES )
        require( `.${pathRoutes}/${FILES[file]}` )( _app )

    // require('./routes/user')( _app )
    // require('./routes/index')( _app )
    // require('./routes/profile')( _app )
    // require('./routes/auth')( _app )
    // require('./routes/errors')( _app )

}
