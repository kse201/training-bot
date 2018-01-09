const gulp = require('gulp')
const gulpIf = require('gulp-if')
const mocha = require('gulp-mocha')
const eslint = require('gulp-eslint')

const isFixed = (file) => {
  return file.eslint != null && file.eslint.fixed
}

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint({fix: true}))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('.')))
    .pipe(eslint.failAfterError())
})

gulp.task('mocha', () => {
  return gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'list'}))
})

gulp.task('default', ['lint', 'mocha'])
