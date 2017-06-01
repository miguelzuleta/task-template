var gulp         = require('gulp'),
	haml         = require('gulp-ruby-haml'),
	htmlmin      = require('gulp-htmlmin'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	connect      = require('gulp-connect'),
	gIF          = require('gulp-if'),
	uglify       = require('gulp-uglify'),
	scssLint     = require('gulp-scss-lint'),
	autoprefixer = require('gulp-autoprefixer'),
	jsLint       = require('gulp-jshint'),
	include      = require("gulp-include"),
	rename      = require("gulp-rename"),
	jsStylish    = require('jshint-stylish'),
	browserify   = require('browserify'),
	buffer       = require('vinyl-buffer'),
	source       = require('vinyl-source-stream'),
	babelify     = require('babelify')
	// babel        = require('babel');

var env = process.env.NODE_ENV || 'envDev',
	dir,
	cssOutput,
	cssComments;

if(env === 'envDev'){
	dir = './site/dev';
	cssOutput = 'expanded';
	cssComments = true;
} else{
	dir = './site/prod';
	cssOutput = 'compressed';
	cssComments = false;
}

gulp.task('connect', function(){
	connect.server({
		root: dir,
		livereload: true
	});
});

gulp.task('haml', function(){
	gulp.src('site/components/haml/raw/**/*.haml')
		.pipe(haml({
		  trace: true
		}).on('error', function(e) { console.log(e.message); }))
		.pipe(gulp.dest('site/components/haml/processed'));

	gulp.src('site/components/haml/processed/*.html')
		.pipe(include())
		.pipe(gIF(env !== 'envDev', htmlmin({
			collapseWhitespace: true
		})))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload());
});

gulp.task('include', function(){
	gulp.src('site/components/haml/processed/*.html')
		.pipe(include())
		.pipe(gIF(env !== 'envDev', htmlmin({
			collapseWhitespace: true
		})))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload());
})

gulp.task('sass-lint', function(){
	gulp.src('site/components/sass/*.scss')
		.pipe(scssLint())
});

gulp.task('js-hint', function(){
	return gulp.src(['site/components/js/*.js'])
		.pipe(jsLint({
			esversion: 6
		}))
		.pipe(jsLint.reporter(jsStylish))
});

gulp.task('sass', function(){
	gulp.src('site/components/sass/styles.scss')
		.pipe(sass({
			outputStyle: cssOutput,
			sourceComments: cssComments
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./site/dev'));
});

// gulp.task('js', function(){
// 	gulp.src([
// 		'site/components/js/script1.js',
// 		'site/components/js/script2.js'
// 	])
// 		.pipe(concat('js.js'))
// 		.pipe(gIF(env !== 'envDev', uglify()))
// 		.pipe(gulp.dest(dir))
// });

gulp.task('js', function() {
	browserify('site/components/js/main.js')
		.transform(babelify, {
			presets: [ 'es2015' ]
		})
		.bundle()
		.pipe(source('site/components/js/main.js'))
		.pipe(buffer())
		.pipe(rename('js.js'))
		.pipe(gulp.dest('./site/dev'))
})


gulp.task('partials', function(){
	gulp.src(dir + '/*.*')
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('site/components/sass/*.scss', ['sass']);
	gulp.watch('site/components/haml/raw/**/*.haml', ['haml']);
	gulp.watch('site/components/haml/processed/**/*.html', ['include']);
	gulp.watch('site/components/js/*.js', ['js', 'js-hint']);
	gulp.watch(dir + '/*.*', ['partials']);
});

gulp.task('default', ['haml', 'include', 'sass', 'js', 'sass-lint', 'js-hint', 'connect', 'watch']);
