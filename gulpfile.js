
var gulp = require('gulp-group')(require('gulp'));
var  
// bump = require('gulp-bump'),
//     debug = require('gulp-debug'),
//     path = require('path'),
//     uglify = require('gulp-uglify'),
//     copy = require('gulp-copy'),
//     rimraf = require('gulp-rimraf'),
//     ignore = require('gulp-ignore'),
//     runSequence = require('run-sequence'),
//     del = require('del'),
//     fs = require('fs'),
//     concat = require('gulp-concat'),
//     order = require('gulp-order'),
//     rename = require("gulp-rename"),
//     inject = require('gulp-inject'),
//     replace = require('gulp-replace'),
     typescript = require('gulp-typescript'),
     tslint = require('gulp-tslint'),
//     sourcemaps = require('gulp-sourcemaps'),
     Config = require('./gulpfile.config')
//     bundle = require('gulp-bundle-assets'),
//     cssmin = require('gulp-cssmin'),
//     vulcanize = require('gulp-vulcanize'),
//     mainBowerFiles = require('main-bower-files');
;


var tsProject = typescript.createProject('server/tsconfig.json');
var destination = "../basic/-nodulus-shell";
var config = new Config();



gulp.task('compile', function () {
    var tsProject = typescript.createProject('server/tsconfig.json');
    var tsResult = tsProject.src().pipe(typescript(tsResult));
    return tsResult.js.pipe(gulp.dest('./server/'));
});
/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
    config.libraryTypeScriptDefinitions]; //reference to library .d.ts files


    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});


gulp.task('default', ['compile']);
