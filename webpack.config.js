var webpack = require('webpack');

module.exports = {
   entry: {
     main : [
       './src/main.js'
     ],
     vendor : ["react","react-redux", "react-dom",
      //  "rxjs", 
       "core-js"]
   },
   output: {
     path: __dirname,
     filename: "./dist/bundle.js"
   },
   devtool : 'source-map',
   plugins : [
     new webpack.optimize.CommonsChunkPlugin("vendor", "dist/vendor.bundle.js"),
    //  new webpack.DefinePlugin({
    //    'process.env': {
    //      'USERSPACE_GATEWAY': JSON.stringify(process.env.USERSPACE_GATEWAY)
    //    }
    //  }),
  ],
   module:{
      loaders: [{
         test: /\.js?$/,
         exclude: /node_modules/,
         loaders: [
          //  'react-hot',
           'babel?presets[]=es2015,presets[]=react'
         ]
      }]
 }
}
