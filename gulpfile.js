var gulp = require('gulp');
var less = require('gulp-less');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var minify = require('gulp-cssnano');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('less', function() {
	return gulp.src('./resources/assets/less/app.less')
				.pipe(less())
				.pipe(minify({ compatibility: 'ie8' }))
				.pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
	return browserify('./resources/assets/js/app.js', { debug: true })
			.transform(babelify)
			.bundle()
			.pipe(source('app.js'))
			.pipe(buffer())
			//.pipe(uglify())
			.pipe(gulp.dest('./public/js'));
});

gulp.task('default', function() {
	gulp.watch('./resources/assets/less/*.less', ['less']);

	gulp.watch('./resources/assets/js/**/*.js', ['js']);
});