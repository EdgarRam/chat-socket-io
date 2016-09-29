module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('stylus', ( ) =>
       config.modules.gulp
       .src( config.foldersPath.stylus.main )
       .pipe(  config.modules.stylus({
           compress: true
        }))
       .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/css` ) )
   )


}
