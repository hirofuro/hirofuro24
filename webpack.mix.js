const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .vue('resources/js/vueapp.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/style.scss', 'public/css')
   .sourceMaps()
   .options({
      processCssUrls: false,
      postCss: [
        require('css-mqpacker')()
      ],
      autoprefixer: {
        browsers: ['last 2 versions'],
        options: {
          grid: true,
        }
      }
   });
   
    mix.webpackConfig({ devtool: "inline-source-map" });


mix.browserSync({
    server: 'public',
    proxy: false,
    files: [
        'public/**/*.html',
        'public/js/*.js',
        'public/css/*.css',
    ]
})