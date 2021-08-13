let gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    groupMedia = require('gulp-merge-media-queries'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify-es').default,
    del = require('del'),
    cache = require('gulp-cache'),
    realFavicon = require ('gulp-real-favicon'),
    fs = require('fs');

const realFaviconOptions = {
  keep: 'meta[property="og:image"]'
};

// CLEAN DIST
gulp.task('clean', async function(){
  del.sync('dist')
})

// SCSS COMPILE
gulp.task('scss', function(){
  return gulp.src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(groupMedia({
      log: true
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({ stream: true }));
});

// flight.scss COMPILE
gulp.task('flightScss', function() {
  return gulp.src("src/templates/flight/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(gulp.dest("dist/templates/flight"))
    .pipe(browserSync.reload({ stream: true }));
});

// object-card.scss COMPILE
gulp.task('ObjCardScss', function() {
  return gulp.src("src/templates/object-card/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(gulp.dest("dist/templates/object-card"))
    .pipe(browserSync.reload({ stream: true }));
});

// patent-card.scss COMPILE
gulp.task('PatCardScss', function() {
  return gulp.src("src/templates/patent-card/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(gulp.dest("dist/templates/patent-card"))
    .pipe(browserSync.reload({ stream: true }));
});

// game SCSS COMPILE
gulp.task('GameScss', function() {
  return gulp.src("src/templates/game/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(gulp.dest("dist/templates/game"))
    .pipe(browserSync.reload({ stream: true }));
});

// CSS LIBRILES
gulp.task('css', function(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('src/scss'))
    .pipe(browserSync.reload({stream: true}))
});



// WEBPACK TEMPLATE FUNCTION
function compileWebpack(input, output){
  return gulp.src(input)
    .pipe(webpackStream({
      watch: true,
      devtool: 'source-map',
      output: {
        filename: output
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      }
    }))
    .pipe(sourcemaps.init())
    // .pipe(uglify().on("error", notify.onError())) // webpack already uglifies
    .pipe(gulp.dest("dist/js"))
    .pipe(sourcemaps.write("./"))
    .pipe(browserSync.reload({ stream: true }))
}

gulp.task('scripts', function(){ return compileWebpack('src/js/index.js', 'index.min.js'); });
gulp.task('flightScripts', function(){ return compileWebpack('src/js/flight.js', 'flight.min.js'); });
gulp.task('flightDbgScripts', function(){ return compileWebpack('src/js/flight-debug.js', 'flight-debug.min.js'); });
gulp.task('gameScripts', function(){ return compileWebpack('src/js/game-wrapper.js', 'game-wrapper.min.js'); });
gulp.task('patentScripts', function(){ return compileWebpack('src/js/patent-card.js', 'patent-card.min.js'); });
gulp.task('objectScripts', function(){ return compileWebpack('src/js/object-card.js', 'object-card.min.js'); });
gulp.task('alinesScripts', function(){ return compileWebpack('src/js/abstract-lines.js', 'abstract-lines.min.js'); });


// PUG COMPILE
gulp.task('pug', function () {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code,
      realFaviconOptions))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }))
});

// flight.pug COMPILE
gulp.task('flightPug', function () {
  return gulp.src('src/templates/flight/flight.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code,
      realFaviconOptions))
    .pipe(gulp.dest('dist/templates/flight'))
    .pipe(browserSync.reload({ stream: true }))
});

// flight-dbg.pug COMPILE
gulp.task('flightDbgPug', function () {
  return gulp.src('src/templates/flight/flight-debug.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/templates/flight'))
    .pipe(browserSync.reload({ stream: true }))
});

// object-card.pug COMPILE
gulp.task('ObjCardPug', function () {
  return gulp.src('src/templates/object-card/object-card.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/templates/object-card'))
    .pipe(browserSync.reload({ stream: true }))
});

// patent-card.pug COMPILE
gulp.task('PatCardPug', function () {
  return gulp.src('src/templates/patent-card/patent-card.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/templates/patent-card'))
    .pipe(browserSync.reload({ stream: true }))
});

// main.pug COMPILE
gulp.task('MainGamePug', function () {
  return gulp.src('src/templates/game/main.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code,
      realFaviconOptions))
    .pipe(gulp.dest('dist/templates/game'))
    .pipe(browserSync.reload({ stream: true }))
});


// A lot of fucking code duplication
gulp.task('AlinesPug', function () {
  return gulp.src('src/templates/abstract-lines/abstract-lines.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/templates/abstract-lines/'))
    .pipe(browserSync.reload({ stream: true }))
});

// FONTS TRANSFER
gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

// // TEMPLATES TRANSFER
// gulp.task('templates', function () {
//   return gulp.src('src/templates/**/*.{js,json}')
//     .pipe(gulp.dest('dist/templates'))
//     .pipe(browserSync.reload({ stream: true }))
// });



// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'dist/faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: 'src/img/social/favicon.png',
		dest: 'dist',
		iconsPath: '/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: '#040d21',
				margin: '7%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {
				design: 'raw'
			},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'shadow',
				themeColor: '#040d21',
				manifest: {
					name: 'К-О-Д Будущего',
					display: 'browser',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 12.8125,
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});




// IMAGES TRANSFER
gulp.task('images', function () {
  return gulp.src('src/img/**/*.*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3, // 0 to 7
        svgoPlugins: [{ removeViewBox: true }],
      })
    ))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.reload({ stream: true }))
});

// CONTENT TRANSFER
gulp.task('content', function () {
  return gulp.src('src/content/**/*.*')
    .pipe(gulp.dest('dist/content'))
    .pipe(browserSync.reload({ stream: true }))
});

// HTML WATCHING
gulp.task('html', function () {
  return gulp.src('dist/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

// BRIWSER-SYNC INIT
gulp.task('browser-sync', function() {
  browserSync.init({
    startPath: "index.html",
    server: {
       baseDir: "dist/",
       directory: true
    },
  });
});

// WATCH ------------------------------------------------------------------------------------------------------
gulp.task('watch', function(){
  gulp.watch("src/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("src/*.pug", gulp.parallel("pug"));
  gulp.watch("src/js/index.js", gulp.parallel("scripts"));
  gulp.watch("src/js/flight.js", gulp.parallel("flightScripts"));
  gulp.watch("src/js/flight-debug.js", gulp.parallel("flightDbgScripts"));
  gulp.watch("src/js/game-wrapper.js", gulp.parallel("gameScripts"));
  gulp.watch("src/js/patent-card.js", gulp.parallel("patentScripts"));
  gulp.watch("src/js/object-card.js", gulp.parallel("objectScripts"));
  gulp.watch("src/js/abstract-lines.js", gulp.parallel("alinesScripts"));

  gulp.watch("src/templates/flight/*.scss", gulp.parallel("flightScss")); // flight watch scss

  gulp.watch("src/templates/object-card/*.scss", gulp.parallel("ObjCardScss")); // object-card watch scss

  gulp.watch("src/templates/patent-card/*.scss", gulp.parallel("PatCardScss")); // patent-card watch scss

  gulp.watch("src/templates/game/*.scss", gulp.parallel("GameScss")); // game watch scss

  gulp.watch("src/templates/flight/*.pug", gulp.parallel("flightPug")); // flight watch pug

  gulp.watch("src/templates/object-card/*.pug", gulp.parallel("ObjCardPug")); // object-card watch pug

  gulp.watch("src/templates/patent-card/*.pug", gulp.parallel("PatCardPug")); // patent-card watch pug

  gulp.watch("src/templates/game/main.pug", gulp.parallel("MainGamePug")); // MainGamePug watch pug

  gulp.watch("src/templates/abstract-lines/abstract-lines.pug", gulp.parallel("AlinesPug")); // MainGamePug watch pug

  gulp.watch("src/img/**/*.*", gulp.parallel("images")); // img watch

  gulp.watch("src/fonts/**/*.*", gulp.parallel("fonts")); // fonts watch

  gulp.watch("src/content/**/*.*", gulp.parallel("content")); // content watch

});

// DEFAULT TASKS
gulp.task("default", gulp.series("generate-favicon", gulp.parallel(
  "pug", "flightPug", "flightDbgPug", "ObjCardPug", "PatCardPug", "MainGamePug", "AlinesPug",   // pug
  "css", "scss", "flightScss", "ObjCardScss", "PatCardScss", "GameScss",                        // scss
  "scripts", "patentScripts", "flightScripts", "gameScripts", "objectScripts", "alinesScripts", // webpack
  "fonts", "images", "content", /*"js",*/"browser-sync", "watch")                               // other
));