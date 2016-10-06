const morgan = require( 'morgan' )
const bodyParser = require ( 'body-parser' )
const methodOverride = require( 'method-override' )
const path = require( 'path' )


module.exports = ( app, express ) =>{


    // all environments
    // app.use(favicon(__dirname + '/public/favicon.ico'))
    app.use( morgan( 'combined' ) ) //trazas
    //app.set( 'port', port )
    app.use( bodyParser.json() )
    app.use( methodOverride() )
    app.use( bodyParser.urlencoded({ extended: true }) )
    app.use( express.static( path.join( __dirname, '/../build' ) ))

    // development only
    if ('development' == app.get( 'env' ) ) {
        app.use( ( err, req, res, next ) => {
            if ( res.headersSent ) {
                return next(err)
            }
            res.status(500)
            res.render('error', { error: err })
        })
    }

}
