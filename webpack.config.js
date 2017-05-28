var webpack = require('webpack');

module.exports = {
   entry: {
     main : [
       './src/main.js'
     ],
     vendor : ["react","react-redux", "react-dom",
       "core-js"]
   },
   node: {
     fs: 'empty',
     net: 'empty',
     tls: 'empty',
     child_process: 'empty'
   },
   output: {
     path: __dirname,
     filename: "./dist/bundle.js"
   },
   devtool : 'source-map',
   plugins : [
     new webpack.optimize.CommonsChunkPlugin("vendor", "dist/vendor.bundle.js"),
  ],
   module:{
      loaders: [{
         test: /\.js?$/,
         exclude: /node_modules/,
         loaders: [
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
         ]
      }]
 }
}
