
module.exports = ( app ) =>{


    app.route('/user/login')
        .post( ( req, res ) => {
            res.json({
                "username": "edgar"
            })
        })


    app.route('/users/:id?')
        .get( ( req, res ) => {
            res.send('Get users');
        })
        .post( ( req, res ) => {
            // console.log( req.params );
            // console.log( req.body );
            res.send('Add a user ' + req.body)
        })
        .put( ( req, res ) => {
            res.send('Update the user');
        })


}
