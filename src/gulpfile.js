var gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); 
 
 
gulp.task('default', function(){ 
    console.log(10); 
}) 
 
gulp.task('scss', function(){ 
    return gulp.src(["./Components/**/*.scss","./Components/**/*.sass", "../src/**/*.scss"]) 
        .pipe(sass()) 
        .pipe(sass().on("error", sass.logError)) 
        .pipe(gulp.dest("../src")) 
}); 
 
 
gulp.task('watch', function() { 
    // gulp.watch(["./style/**/*.scss","./style/**/*.sass"],gulp.series(['scss'])) 
    gulp.watch(["./Components/**/*.scss","./Components/**/*.sass", "../src/**/*.scss"],gulp.series(['scss'])) 
  }); 
gulp.task('default', gulp.series('scss', 'default', 'watch'));
