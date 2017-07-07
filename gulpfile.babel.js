'use strict'

import gulp         from 'gulp'
import htmlmin      from 'gulp-htmlmin'
import sass         from 'gulp-sass'
import concat       from 'gulp-concat'
import connect      from 'gulp-connect'
import gIF          from 'gulp-if'
import uglify       from 'gulp-uglify'
import scssLint     from 'gulp-scss-lint'
import autoprefixer from 'gulp-autoprefixer'
import eslint       from 'gulp-eslint'
import include      from "gulp-include"
import rename       from "gulp-rename"
import sourcemaps   from 'gulp-sourcemaps'

import jsStylish    from 'jshint-stylish'
import browserify   from 'browserify'
import buffer       from 'vinyl-buffer'
import source       from 'vinyl-source-stream'
import babelify     from 'babelify'
import { argv }     from 'yargs'

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
	console.log('\n\nWatching for changes...\n\n')
	gulp.watch('site/components/sass/*.scss', ['sass'])
	gulp.watch('site/components/html/**/*.html', ['html'])
	gulp.watch('site/components/js/*.js', ['js', 'lint'])
})

gulp.task('default', ['html', 'sass', 'js', 'lint', 'connect', ...runWatch])
