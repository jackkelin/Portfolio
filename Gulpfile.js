// Define
var gulp        	= require('gulp'),
	browserSync 	= require('browser-sync'),
	concat      	= require('gulp-concat'),
	uglify      	= require('gulp-uglify'),
	inject      	= require('gulp-inject'),
	sass        	= require('gulp-sass'),
	sourcemaps 		= require('gulp-sourcemaps'),
	imagemin    	= require('gulp-imagemin'),
  pngquant      = require('imagemin-pngquant'),
	autoprefixer 	= require('gulp-autoprefixer'),
	plumber     	= require('gulp-plumber'),
	mustache     	= require('gulp-mustache-plus'),
  minifyCSS     = require('gulp-minify-css'),
  connect       = require('gulp-connect-php'),
  browserSync   = require('browser-sync'),
  modernizr     = require('gulp-modernizr'),
	jshint 			  = require('gulp-jshint');

// Paths
var Paths = {
	app	: 'dist/',
	src	: 'src/'
}

//----------------------- Images
gulp.task('images', () =>
    gulp.src(Paths.src + 'images/**/*')
      .pipe(imagemin({
        progressive: true,
        use: [pngquant()]
      }))
      .pipe(gulp.dest(Paths.app+'images'))
);

//----------------------- CSS
gulp.task('sass', function () {
  return gulp.src(Paths.src + '_scss/*.scss')
    .pipe(sass({
    	sourceComments: 'map',
    	sourceMap: Paths.src + '_scss'
    }).on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(gulp.dest(Paths.app + 'css'));
});
gulp.task('vendor_css', function () {
  return gulp.src([
    'bower_components/normalize-css/normalize.css',
    'bower_components/slick-carousel/slick/slick-theme.css',
    'bower_components/slick-carousel/slick/slick.css',
  ])
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(Paths.app + 'css'));
});
//----------------------- JS
gulp.task('js', function () {
  // to do - lint
  return gulp.src(Paths.src + '_scripts/*.js')
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(Paths.app + 'js'));
});
gulp.task('modernizr', function() {
  return gulp.src(Paths.src + '_scss/**/*')
    .pipe(modernizr({
      crawl: true,
      options: [
        'setClasses',
        'html5shiv',
        'html5printshiv',
        'addTest',
        'testProp',
        'fnBind'
      ],
      //Explicitly included tests
      tests: [
        'svg', 'js','touchevents',
      ],
      //Explicity excluded tests
      excludeTests: [
        'hidden'
      ]
    }))
    .pipe(gulp.dest(Paths.src + '_scripts/'))
});
gulp.task('vendor_js', function () {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/slick-carousel/slick/slick.min.js'
  ])
  .pipe(jshint.reporter('default'))
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest(Paths.app + 'js'));
});
//----------------------- HTML template
gulp.task('mustache', function () {
  return gulp.src(Paths.src + '_inc/*.mustache')
    .pipe(mustache(Paths.src + 'data.json',{
      path_app: 'dist/'
    },{
        head: Paths.src + '_inc/partials/header.mustache',
        foot: Paths.src + '_inc/partials/footer.mustache',
        overlay: Paths.src + '_inc/partials/overlay.mustache',
        svgDesktop: Paths.src + '_inc/partials/svg_desktop.mustache',
        svgTablet: Paths.src + '_inc/partials/svg_tablet.mustache',
        svgMobile: Paths.src + '_inc/partials/svg_mobile.mustache',
    }))
    .pipe(gulp.dest(Paths.app));
});
//----------------------- SERVER
gulp.task('connect-php', function(){
  connect.server({
    base: './dist/'
  })
});
gulp.task('browser-sync',['connect-php'], function() {
  browserSync({
    proxy: '127.0.0.1:8000',
    open: false,
  });
});
//----------------------- TASKS
gulp.task('watch', function () {
    gulp.watch(Paths.src + '_scss/**/*.scss', ['sass']).on('change', function(){
      browserSync.reload();
    });
    gulp.watch(Paths.src + '_scripts/*.js', ['js']);
    //gulp.watch(Paths.src + 'images/*', ['images']);
    gulp.watch(Paths.src + '_inc/**/*.mustache', ['mustache']).on('change', function(){
      browserSync.reload();
    });
    // gulp.watch(Paths.src + '/_scripts/**/*.js', ['scripts', 'vendorsjs']);
});
gulp.task('build', ['modernizr', 'vendor_js', 'vendor_css', 'sass', 'mustache','images', 'js','watch']);
gulp.task('default', ['vendor_js', 'vendor_css', 'sass', 'mustache', 'js','browser-sync','watch']);
