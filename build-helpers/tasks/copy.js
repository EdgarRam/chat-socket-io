module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('copy', ( ) =>
       config.modules.gulp
       .src( `${config.foldersPath.src}/bower_components/**/*` )
       .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/bower_components` ) )
   )

}
