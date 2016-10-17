
module.exports = ( app ) =>{


    app.route('/profile')
        .get(function(req, res) {
            res.json( { 'msg':'profile get'} )
        })
        .post(function(req, res) {
            res.json( { 'msg':'profile post'} )
        })

    app.route('/profile-redirect')
        .get(function(req, res) {
            res.redirect( '/profile')
        })



}
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
