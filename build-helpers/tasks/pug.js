module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('pug', ( ) =>
       config.modules.gulp
       .src( config.foldersPath.pug )
       .pipe( config.modules.plumber())
       .pipe( config.modules.pug({
           pretty: true
       }) )
       .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/views` ) )
   )

}
