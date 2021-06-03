var webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: './src/App.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: './public/bundle.js',
      publicPath: '/',
   },
   resolve: {
    root: __dirname,
    modulesDirectories: [
        'node_modules',
        './src/components',
    ],
    alias: {
        applicationStyles: 'src/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};