
module.exports = ( app ) =>{

    app.get('/errorSignup', function(req, res) {

        res.json( { message: req.flash('signupMessage') } )
    })

}
