const passport = require('passport')

module.exports = ( app ) =>{


    app.route('/signup')
        .post(
            passport.authenticate('local-signup', {
                successRedirect : '/profile-redirect', // redirect to the secure profile section
                failureRedirect : '/errorSignup', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            })
        )


    app.route('/login')
        .post(
            passport.authenticate('local-login', {
                successRedirect : '/profile-redirect', // redirect to the secure profile section
                failureRedirect : '/errorSignup', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            })
        )

    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate( 'facebook' ) )

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/errorSignup'
        }))

    app.get('/auth/twitter', passport.authenticate('twitter'))

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/errorSignup'
        }))


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
