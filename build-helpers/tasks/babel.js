module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('babel', ( ) =>
        config.modules.gulp
        .src( config.foldersPath.scripts )
        .pipe( config.modules.plumber())
        // .pipe( config.modules.sourcemaps.init())
        .pipe( config.modules.babel({
            presets: ['es2015']
        }))
        .pipe( config.modules.concat('all.js'))
        .pipe( config.modules.sourcemaps.write('.'))
        .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/script` ) )
   )

}
