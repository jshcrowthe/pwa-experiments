var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var writeServiceWorker = function(rootDir) {
  return new Promise(function(resolve, reject) {
    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
      staticFileGlobs: [rootDir + '/**/*.{js,html,css}'],
      stripPrefix: rootDir,
      runtimeCaching: [{
        urlPattern: /https:\/\/fonts.googleapis.com/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /https:\/\/cdnjs.cloudflare.com/,
        handler: 'cacheFirst'
      }]
    }, resolve);
  });
};

gulp.task('build', function(done) {
  var rootDirs = ['todo/'];
  Promise.all(rootDirs.map(writeServiceWorker))
    .then(function() {
      done();
    });
});


gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    open: false
  });
});

gulp.task('default', ['build', 'serve'], function() {
  gulp.watch("**/*.{js,html,css}", ['build']);
  gulp.watch('**/service-worker.js').on('change', reload);
});