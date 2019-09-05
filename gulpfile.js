var gulp = require('gulp'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
      return gulp.src('sass/*')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});

gulp.task('watch', function(){
  var server = livereload();
  server.listen();
   gulp.watch('sass/*',  gulp.series('sass'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('css/custom.css')
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});

//gulp.task('default',['sass','watch']);
