const morgan = require( 'morgan' )
const bodyParser = require ( 'body-parser' )
const methodOverride = require( 'method-override' )
const path = require( 'path' )
const cookieParser = require('cookie-parser')
const passport = require('passport')
const flash    = require('connect-flash')
const session      = require('express-session')



module.exports = ( app, express ) =>{


    // all environments
    // app.use(favicon(__dirname + '/public/favicon.ico'))
    app.use( morgan( 'combined' ) ) //trazas
    //app.set( 'port', port )
    app.use( bodyParser.json() )
    app.use( methodOverride() )
    app.use( bodyParser.urlencoded({ extended: true }) )
    // app.use( express.static( path.join( __dirname, '/../../build' ) ))
    app.use( '/components', express.static( path.join( __dirname, '/../../build' ) ))
    app.use(cookieParser())

    // development only
    if ('development' == app.get( 'env' ) ) {
        app.use( ( err, req, res, next ) => {
            if ( res.headersSent ) {
                return next(err)
            }
            res.status( err.status || 500 )
            res.send({
                message: err.message,
                error: err
            })
        })
    }




    // required for passport
    app.use(session({
        secret: 'ilovescotchscotchyscotchscotch',
        resave: true,
        saveUninitialized: true,
    })) // session secret
    app.use(passport.initialize())
    app.use(passport.session()) // persistent login sessions
    app.use(flash())



     require('../auth/passport')(passport);
}
