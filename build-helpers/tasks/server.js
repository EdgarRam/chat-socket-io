module.exports = ( config ) => {
   'use strict'


   config.modules.gulp.task('server', ( ) =>
        config.modules.nodemon({
            script: './server/index.js',
            ext: 'js html css',
            env: {
                'NODE_ENV': 'development'
            },
            watch: config.foldersPath.build
        })
        .on('restart', function () {
            console.log('restarted!')
        })
   )

}
