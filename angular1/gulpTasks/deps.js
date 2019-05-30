const gulp = require ('gulp')
const uglify = require ('gulp-uglify')
const uglifycss = require ('gulp-uglifycss')
const concat = require ('gulp-concat')

gulp.task ('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task( 'deps.js', () =>{
  return gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
    'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
    'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
    'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/dist/js/app.min.js',
  ])
  .pipe(uglify()) //retira os espaços uglify de JavaScript
  .pipe(concat('deps.min.js'))//gera o arquivo depois do uglify
  .pipe(gulp.dest('public/assets/js'))//salva o arquivo
})

gulp.task( 'deps.css', () =>{
  return gulp.src([
    'node_modules/angular-toastr/dist/angular-toastr.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
  ])
  .pipe(uglifycss({"uglyComments": true}))//uglify do CSS
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task( 'deps.fonts', () =>{
  return gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/admin-lte/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
