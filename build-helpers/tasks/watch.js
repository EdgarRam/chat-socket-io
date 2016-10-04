module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('watch', ( ) =>{
       config.modules.gulp.watch( config.foldersPath.stylus.src , ['stylus'] )

       config.modules.gulp.watch( config.foldersPath.pug , ['pug'] )

       config.modules.gulp.watch( config.foldersPath.scripts , ['babel'] )
   })


}
