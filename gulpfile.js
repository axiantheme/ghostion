// Load Gulp Plugins
var gulp        = require('gulp'),
    eventstream = require('event-stream'),
    path        = require('path');
    sass        = require('gulp-ruby-sass'),
    rename      = require('gulp-rename'),
    minifycss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    notify      = require('gulp-notify'),
    clean       = require('gulp-clean'),
    zip         = require('gulp-zip');

// Compile scss Files
gulp.task('scss', function() {
    return gulp.src('dev/src/scss/ghostion.scss')
        .pipe(sass({style: 'expanded', quiet: true, cacheLocation: 'dev/src/scss/.sass-cache'}))
        .pipe(gulp.dest('dev/dest/css'))
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('packages/theme/assets/css'))
        .pipe(notify({message: 'SCSS Files Compiled Successfully'}));
});

// Concat JS Files
gulp.task('concat', function() {
    return gulp.src([
            'dev/src/framework/foundation/js/vendor/modernizr.js',
            'dev/src/framework/foundation/js/foundation/foundation.js',
            'dev/src/framework/foundation/js/foundation/foundation.alert.js',
            'dev/src/framework/foundation/js/foundation/foundation.offcanvas.js',
            'dev/src/framework/foundation/js/foundation/foundation.reveal.js',
            'dev/src/framework/foundation/js/foundation/foundation.tooltip.js',
            'dev/src/js/*.js'])
        .pipe(concat('ghostion.js'))
        .pipe(gulp.dest('dev/dest/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('packages/theme/assets/js'))
        .pipe(notify({message: 'JavaScript Files Compiled & Compressed Successfully'}));
});

// Watch scss and JS Files
gulp.task('watch', function() {
    gulp.watch('dev/src/scss/**/*.scss', ['scss']);
    gulp.watch('dev/src/js/*.js', ['concat']);
});

// Zip Packages Files
gulp.task('zip', function() {
    return eventstream.concat (
        // Zip Theme Files
        gulp.src('**', {cwd: path.join(process.cwd(), 'packages/theme')})
            .pipe(zip('ghostion.zip'))
            .pipe(gulp.dest('dev/tmp/theme')),
        // Zip Documentation Files
        gulp.src('**', {cwd: path.join(process.cwd(), 'packages/documentation')})
            .pipe(zip('ghostion_documentation.zip'))
            .pipe(gulp.dest('dev/tmp/documentation')),
        // Zip Sources Files
        gulp.src('**', {cwd: path.join(process.cwd(), 'packages/sources')})
            .pipe(zip('ghostion_sources.zip'))
            .pipe(gulp.dest('dev/tmp/sources')),
        // Zip DemoBuilder Files
        gulp.src('**', {cwd: path.join(process.cwd(), 'packages/demobuilder')})
            .pipe(zip('ghostion_demobuilder.zip'))
            .pipe(gulp.dest('dev/tmp/demobuilder'))

    );
});

// Clean tmp Files
gulp.task('clean_tmp', function() {
    gulp.src('dev/tmp', {read: false})
        .pipe(clean());
});

// Clean releases Files
gulp.task('clean_releases', function() {
    gulp.src('releases/**', {read: false})
        .pipe(clean());
});

// Move Zip Files to releases Folder
gulp.task('move_zip', ['clean_releases'], function() {
    gulp.src('dev/tmp/**/*.zip')
        .pipe(gulp.dest('releases'))
        .pipe(notify({message: 'All Files Released Successfully'}));
});

// Main Task: Develop
gulp.task('develop', function() {
    gulp.start('scss', 'concat', 'watch');
});

// Main Task: Release
gulp.task('release', ['zip'], function() {
    gulp.start('move_zip', 'clean_tmp');
});