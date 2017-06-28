var gulp         = require('gulp'),
	htmlmin      = require('gulp-htmlmin'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	connect      = require('gulp-connect'),
	gIF          = require('gulp-if'),
	uglify       = require('gulp-uglify'),
	scssLint     = require('gulp-scss-lint'),
	autoprefixer = require('gulp-autoprefixer'),
	eslint       = require('gulp-eslint'),
	include      = require("gulp-include"),
	rename       = require("gulp-rename"),
	jsStylish    = require('jshint-stylish'),
	browserify   = require('browserify'),
	buffer       = require('vinyl-buffer'),
	source       = require('vinyl-source-stream'),
	babelify     = require('babelify'),
	sourcemaps   = require('gulp-sourcemaps'),
	argv         = require('yargs').argv

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

gulp.task('html', function(){
	gulp.src('site/components/html/*.html')
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

gulp.task('lint', function(){
	return gulp.src(['site/components/js/*.js', '!node_modules/**'])
		.pipe(eslint({
	    "parserOptions": {
	        "ecmaVersion": 6,
	        "sourceType": "module",
	        "ecmaFeatures": {
	            "jsx": true
	        }
	    },
	    "rules": {
	        "no-extra-semi": "error"
	    }
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
});

gulp.task('sass', function(){
	gulp.src('site/components/sass/styles.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: cssOutput,
				sourceComments: cssComments
			}).on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 5 versions'],
				cascade: false
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./site/dev'))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify('site/components/js/main.js', { debug: true })
		.transform(babelify, {
			presets: [ 'es2015' ]
		})
		.bundle()
		.pipe(source('site/components/js/main.js'))
		.pipe(buffer())
		.pipe(rename('js.js'))
		.pipe(gulp.dest('./site/dev'))
		.pipe(connect.reload());
})

gulp.task('watch', function(){
	gulp.watch('site/components/sass/*.scss', ['sass']);
	gulp.watch('site/components/html/**/*.html', ['html']);
	gulp.watch('site/components/js/*.js', ['js', 'lint']);
});

gulp.task('default', ['html', 'sass', 'js', 'lint', 'connect', 'watch']);
