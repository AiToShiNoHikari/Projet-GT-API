const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const terser = require('gulp-terser-js')
const filter = require('gulp-filter');

function cleanScripts() {
  return del([
    'dist/**',
    '!.git/**'
  ])
}

function minifyJs() {
  return gulp.src('src/**/*.js')
    .pipe(filter([
      '**',
      '!**/__tests__/**',
      '!**/*.spec.js'
    ]))
    .pipe(sourcemaps.init())
    .pipe(terser({
      mangle: {
        toplevel: true
      }
    }))
    .on('error', function(error) {
      if (error.plugin !== "gulp-terser-js") {
        console.log(error.message)
      }
      this.emit('end')
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
}

function packageJSON() {
  return gulp.src('package.json')
    .pipe(gulp.dest('dist'));
}

gulp.task('clean-scripts', cleanScripts);

gulp.task('minifyJs', minifyJs);

gulp.task('packageJSON', packageJSON);

gulp.task('default', gulp.series(cleanScripts, gulp.parallel(minifyJs, packageJSON)));
