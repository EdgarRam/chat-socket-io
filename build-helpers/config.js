'use strict'

const config = {}
const source = './src'

config.modules = {
	autoprefixer: require('gulp-autoprefixer'),
	concat : require('gulp-concat'),
	fs: require('fs'),
	gulp : require('gulp'),
	path: require('path'),
	plumber : require('gulp-plumber'),
	pug : require('gulp-pug'),
	rename : require('gulp-rename'),
	stylus : require('gulp-stylus'),
	sync : require('gulp-sync')(require('gulp')),
	uglify : require('gulp-uglify'),
    babel : require('gulp-babel'),
    clean : require('gulp-clean'),
    sourcemaps : require('gulp-sourcemaps'),
	nodemon: require('gulp-nodemon')
};


//`
config.foldersPath = {
	src: source,
    build: './build',
    server:'./server/index.js',
    pug: [
        `${source}/views/**/*.pug`
    ],
    stylus: {
        main: `${source}/styles/main.styl`,
        src:  `${source}/styles/**/*.styl`,
    },
    scripts: [
        `${source}/scripts/**/*.js`
    ]
};



// config.routeTasks= {
//     clean: {
//         src: [
//             './{styles,views,js}',
//             './style.css',
//             './*.php',
//             './tournament-configurations'
//         ]
//     },
//     pug: {
//         exclude: '!./src/**/{elements,mixins,globals,layouts}/**/*.jade',
//         src: './src/**/*.jade'
//     },
//     styles: {
//         src: './src/**/*.styl'
//     },
//     scripts:{
//         src: './src/scripts/**/*.js'
//     },
//     functionsPHP:{
//         src: './src/functions/**/*.php'
//     }
// };



config.fn ={
    readFolder: function( folder ){
      var PATH = config.modules.path.join( __dirname, folder )
      var FILES = config.modules.fs.readdirSync(PATH)

      for( var file in FILES ){

        if( FILES[file].search(".js") > -1 ){
            require( folder + '/' + FILES[file] )(config)
        }
      }
    }
}


module.exports = config
