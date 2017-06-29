const gulp         = require('gulp')
const htmlmin      = require('gulp-htmlmin')
const sass         = require('gulp-sass')
const concat       = require('gulp-concat')
const connect      = require('gulp-connect')
const gIF          = require('gulp-if')
const uglify       = require('gulp-uglify')
const scssLint     = require('gulp-scss-lint')
const autoprefixer = require('gulp-autoprefixer')
const eslint       = require('gulp-eslint')
const include      = require("gulp-include")
const rename       = require("gulp-rename")
const jsStylish    = require('jshint-stylish')
const browserify   = require('browserify')
const buffer       = require('vinyl-buffer')
const source       = require('vinyl-source-stream')
const babelify     = require('babelify')
const sourcemaps   = require('gulp-sourcemaps')
const argv         = require('yargs').argv

let dir = './site/dev'
let cssOutput = 'expanded'
let cssComments = true
let minifyHMTL = false
let runWatch = []

if (argv.prod) {
	dir = './site/prod'
	cssOutput = 'compressed'
	cssComments = false
	minifyHMTL = true
}

if (argv.watch) {
	runWatch = ['watch']
}

gulp.task('connect', () => {
	connect.server({
		root: dir,
		livereload: true
	})
})

gulp.task('html', () => {
	gulp.src('site/components/html/*.html')
		.pipe(include())
		.pipe(htmlmin({
			collapseWhitespace: minifyHMTL
		}))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload())
})

gulp.task('sass-lint', () => {
	gulp.src('site/components/sass/*.scss')
		.pipe(scssLint())
})

gulp.task('lint', () => {
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
})

gulp.task('sass', () => {
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
		.pipe(gulp.dest(dir))
		.pipe(connect.reload())
})

gulp.task('js', () =>  {
	browserify('site/components/js/main.js', { debug: true })
		.transform(babelify, {
			presets: [ 'es2015' ]
		})
		.bundle()
		.pipe(source('site/components/js/main.js'))
		.pipe(buffer())
		.pipe(rename('js.js'))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload())
})

gulp.task('watch', () => {
	gulp.watch('site/components/sass/*.scss', ['sass'])
	gulp.watch('site/components/html/**/*.html', ['html'])
	gulp.watch('site/components/js/*.js', ['js', 'lint'])
})

gulp.task('default', ['html', 'sass', 'js', 'lint', 'connect', ...runWatch])
