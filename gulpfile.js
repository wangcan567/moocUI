const gulp = require('gulp');
/* 1、需要把样式代码导入到构建流里面；
2、导入的是sass文件，需要预处理成css */
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');

gulp.task('sass',async function() {
    return gulp.src('components/css/**/*.scss')
    .pipe(sass())   // sass转成css
    .pipe(minifyCSS())   // 转成css之后对代码进行压缩
    .pipe(gulp.dest('dist/css'))   // 输出到打包的目录里
})