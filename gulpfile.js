var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(postcss([
            autoprefixer({ browsers: ['last 1 version'] }),
            cssnano()
        ]))
        .pipe(gulp.dest('./dest'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
});