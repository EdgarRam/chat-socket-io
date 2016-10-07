
module.exports = ( app ) =>{


    app.route('/profile')
        .get(function(req, res) {
            res.send( 'profile get' )
        })
        .post(function(req, res) {
            res.send( 'profile post' )
        })


}
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
