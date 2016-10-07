const passport = require('passport')

module.exports = ( app ) =>{


    app.get('/', function(req, res) {
            res.sendFile( 'index.html' )
        })



    app.route('/signup')
        .post(
            passport.authenticate('local-signup', {
                successRedirect : '/profile', // redirect to the secure profile section
                failureRedirect : '/errorSignup', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            })
        )


    app.route('/login')
        .post(
            passport.authenticate('local-login', {
                successRedirect : '/profile', // redirect to the secure profile section
                failureRedirect : '/errorSignup', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            })
        )



    app.route('/logout')
        .get( function(req, res) {
            req.logout()
            res.redirect('/')
        })


}


const isLoggedIn = (req, res, next)  =>{

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next()

    // if they aren't redirect them to the home page
    res.redirect('/')
}
