const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const terser = require('gulp-terser-js')
const filter = require('gulp-filter');
const jeditor = require("gulp-json-editor");

function cleanScripts() {
  return del([
    'dist/**',
    '!dist/.git/**',
    '!dist/.gitignore',
    '!dist/package.json',
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

function prodPackage(cb) {
  if (require('fs').existsSync(require('path').normalize(__dirname + '/dist/package.json'))){
    let loDependencies = require('./package.json').dependencies;
    return gulp.src('./dist/package.json')
      .pipe(jeditor({
        dependencies: loDependencies
      }))
      .pipe(gulp.dest('./dist'));
  } else {
    return cb()
  }
}

function angular() {
  return gulp.src('angular/**/*')
    .pipe(gulp.dest('dist/angular'));
}

function nvmrc(cb) {
  return gulp.src('.nvmrc').pipe(gulp.dest('dist'));
}

gulp.task('clean-scripts', cleanScripts);

gulp.task('minifyJs', minifyJs);

gulp.task('angular', angular);

gulp.task('prodPackage', prodPackage);

gulp.task('nvmrc', nvmrc);

gulp.task('default', gulp.series(cleanScripts, gulp.parallel(cleanScripts, minifyJs, angular, prodPackage, nvmrc)));
