
module.exports = ( app ) =>


    app.route('/')
        .get(function(req, res) {
            res.sendfile( 'index.html' )
        })
        .post(function(req, res) {
            res.status(500).send('Something broke!');
        })
