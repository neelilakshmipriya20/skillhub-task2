const { src, dest, watch, series } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
const delModule = import('del').then((m) => m.deleteAsync || m.default);

// ✅ Clean the dist folder
async function clean() {
  const del = await delModule;
  return del(['dist']);
}

// ✅ Copy assets (images, css, js) from src/assets → dist/assets
function copyAssets() {
  console.log('📁 Copying assets...');
  return src('src/assets/**/*', { allowEmpty: true })
    .pipe(dest('dist/assets'))
    .pipe(browserSync.stream());
}

// ✅ Compile Nunjucks templates → dist/
function templates() {
  return src('src/templates/*.njk')
    .pipe(
      nunjucksRender({
        path: ['src/templates/'],
      })
    )
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// ✅ Live server setup
function serve() {
  browserSync.init({
    server: { baseDir: 'dist' },
    port: 3015, // Changed to match yours
    open: true,
  });

  watch('src/templates/**/*.njk', templates);
  watch('src/assets/**/*', series(copyAssets));
}

exports.build = series(clean, copyAssets, templates);
exports.default = series(clean, copyAssets, templates, serve);
