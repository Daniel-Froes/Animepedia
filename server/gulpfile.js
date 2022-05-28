const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));


compileSass.compiler = require('node-sass')

const bundleSass = () =>{
    return src('./sass/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('./public/stylesheets/'))
}

const devWatch = () => {
    watch('./sass/**/*.scss', bundleSass)
}
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;