var LocalStrategy   = require('passport-local').Strategy
var User            = require('../db/model/user')

var FacebookStrategy = require('passport-facebook').Strategy
var TwitterStrategy  = require('passport-twitter').Strategy
var configAuth = require('./config/auth')


module.exports = ( passport ) => {


    // used to serialize the user for the session
    passport.serializeUser( ( user, done ) =>
        done(null, user.id)
    )


    // used to deserialize the user
    passport.deserializeUser( ( id, done ) =>
        User.findById( id, ( err, user ) =>
            done( err, user )
        )
    )


    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        ( req, email, password, done ) => {
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick( () => {

                User.findOne({ 'local.email' :  email }, (err, user) => {

                    if (err)
                        return done(err)

                    if (user)
                        return done( null, false, req.flash('signupMessage', 'That email is already taken.') )

                    // if there is no user with that email
                    // create the user
                    var newUser = new User()
                    // set the user's local credentials
                    newUser.local.name      = req.body.name
                    newUser.local.lastName  = req.body.lastName
                    newUser.local.email     = email
                    newUser.local.password  = newUser.generateHash(password)

                    // save the user
                    newUser.save( ( err ) => {
                        if (err)
                            throw err
                        return done(null, newUser)
                    })
                })
            })
        }
    ))


    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        ( req, email, password, done ) => { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ 'local.email' :  email }, function(err, user) {

                if (err)
                    return done(err)

                if (!user)
                    return done(null, false, req.flash('signupMessage', 'No user found.')) // req.flash is the way to set flashdata using connect-flash

                // if the user is found but the password is wrong
                if (!user.validPassword(password))
                    return done(null, false, req.flash('signupMessage', 'Oops! Wrong password.')) // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done( null, user )
            })

        }
    ))

    //facebook Strategy
    passport.use(new FacebookStrategy({
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : ['id', 'displayName', 'photos', 'email'],
        passReqToCallback : true
    },
    (req, accessToken, refreshToken, profile, done) => {

        // asynchronous
        process.nextTick(function() {

            console.log( req.user );
            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err)

                // if the user is found, then log them in
                if (user) {
                    return done(null, user) // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User()

                    // set all of the facebook information in our user model
                    newUser.facebook.id    = profile.id // set the users facebook id
                    newUser.facebook.name  = profile.displayName // look at the passport user profile to see how names are returned
                    newUser.facebook.email = profile.emails[0].value // facebook can return multiple emails so we'll take the first
                    newUser.facebook.token = accessToken

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err

                        // if successful, return the new user
                        return done(null, newUser)
                    })
                }

            })
        })

    }))




    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({
        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL

    },
    (token, tokenSecret, profile, done) =>

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Twitter
        process.nextTick( () =>

            User.findOne({ 'twitter.id' : profile.id }, (err, user) =>{

                if (err)
                    return done(err)

                if (user) {
                    return done(null, user) // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser                 = new User()

                    // set all of the user data that we need
                    newUser.twitter.id          = profile.id
                    newUser.twitter.token       = token
                    newUser.twitter.username    = profile.username
                    newUser.twitter.displayName = profile.displayName

                    // save our user into the database
                    newUser.save( (err) => {
                        if (err)
                            throw err
                        return done(null, newUser)
                    })
                }
            })

        )

    ))
}
