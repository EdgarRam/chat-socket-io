var user = require('./routes/user')
var index = require('./routes/index')

module.exports = ( _app ) =>{
    index( _app )
    user( _app )
}
