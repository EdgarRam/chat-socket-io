
module.exports = ( app ) =>


    app.route('/')
        .get(function(req, res) {
            res.sendFile( 'index.html' )
        })
        .post(function(req, res) {
            res.send( 'index.html' )
        })
