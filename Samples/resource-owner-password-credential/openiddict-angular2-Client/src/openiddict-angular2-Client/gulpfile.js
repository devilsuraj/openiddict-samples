﻿
var gulp = require('gulp');
var del = require('del');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/"
};

var packagesToMove = [
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.src.js',
   paths.npmSrc + '/zone.js/dist/*.js',
   paths.npmSrc + '/es6-shim/es6-shim.js',
   paths.npmSrc + '/reflect-metadata/*.js',
   paths.npmSrc + '/rxjs/**/*.js',
   paths.npmSrc + '/@angular/**/*.js',
   paths.npmSrc + '/jquery/dist/jquery.min.js',
   paths.npmSrc + '/angular2localization/bundles/*.js',
    paths.npmSrc + '/angular2-jwt/angular2-jwt.js',
        paths.npmSrc + '/ng2-bs3-modal/**/*.js',
          paths.npmSrc + '/angular2-materialize/**/*.js',
   paths.npmSrc + '/materialize-css/dist/**/*.*',
    paths.npmSrc + '/dropzone/dist/**/*.*',
        paths.npmSrc + '/material-icons/**/*.*',

];

gulp.task('clean', function () {
    return del(paths.libTarget);
});
////
var Builder = require('systemjs-builder');
gulp.task('bundle', function () {
    var builder = new Builder();
    return builder.loadConfig('./wwwroot/system.config.js')
      .then(function () {
          return builder.buildStatic('app', './wwwroot/dist/app.js');
      });
});
var del = require('del');
gulp.task('deleteJs', function () {
del(['./wwwroot/app/**/*.js', '!tmp/unicorn.js']);
});
gulp.task('deletemap', function () {
    del(['./wwwroot/app/**/*.map', '!tmp/unicorn.js']);
});
gulp.task('delnode', function () {
    del(['./node_modules/**/*.*', '!tmp/unicorn.js']);
});
////
gulp.task('copyNpmTo_wwwrootLibs', ['clean'], function () {
    gulp.src(packagesToMove[0]).pipe(gulp.dest(paths.libTarget + 'systemjs/dist'));
    gulp.src(packagesToMove[1]).pipe(gulp.dest(paths.libTarget + 'systemjs/dist'));
    gulp.src(packagesToMove[2]).pipe(gulp.dest(paths.libTarget + 'zone.js/dist'));
    gulp.src(packagesToMove[3]).pipe(gulp.dest(paths.libTarget + 'es6-shim'));
    gulp.src(packagesToMove[4]).pipe(gulp.dest(paths.libTarget + 'reflect-metadata'));
    gulp.src(packagesToMove[5]).pipe(gulp.dest(paths.libTarget + 'rxjs'));
    gulp.src(packagesToMove[6]).pipe(gulp.dest(paths.libTarget + '@angular'));
    gulp.src(packagesToMove[7]).pipe(gulp.dest(paths.libTarget));
    gulp.src(packagesToMove[8]).pipe(gulp.dest(paths.libTarget + 'angular2localization/bundles'));
    gulp.src(packagesToMove[9]).pipe(gulp.dest(paths.libTarget + 'angular2-jwt'));
    gulp.src(packagesToMove[10]).pipe(gulp.dest(paths.libTarget + 'ng2-bs3-modal'));
    gulp.src(packagesToMove[11]).pipe(gulp.dest(paths.libTarget + 'angular2-materialize'));
    gulp.src(packagesToMove[12]).pipe(gulp.dest(paths.libTarget + 'materialize-css/dist'));
    gulp.src(packagesToMove[13]).pipe(gulp.dest(paths.libTarget + 'dropzone/dist'));
    gulp.src(packagesToMove[14]).pipe(gulp.dest(paths.libTarget + 'material-icons'));
   
});

+gulp.task('default', ['copyNpmTo_wwwrootLibs']);