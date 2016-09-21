/**
 * Created by zncy on 2016/9/21.
 */
module.paths.push('C:/Users/username/AppData/Roaming/npm/node_modules');
var rollup = require( 'rollup' );
var babel = require("rollup-plugin-babel");

rollup.rollup({
    
    entry: 'src/main.js',
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ],

}).then( function ( bundle ) {
    
    bundle.write({
        format: 'umd',
        sourceMap: 'inline',
        dest: 'build/bundle.js',
    });
});
