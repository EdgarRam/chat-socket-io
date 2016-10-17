const passport = require('passport')

module.exports = ( app ) =>{


    app.get('/', function(req, res) {
            res.sendFile( './views/screens/login.html',{
                root: __dirname + '/../../../build'
            } )
        })


}


const isLoggedIn = (req, res, next)  =>{

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next()

    // if they aren't redirect them to the home page
    res.redirect('/')
}
