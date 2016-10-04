module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('clean', ( ) =>
       config.modules.gulp
       .src( config.foldersPath.build )
       .pipe( config.modules.clean() )
   )

}
