module.exports = {
   entry : './src/app/index.js',
   output : {
       path : __dirname + '/src/public/',
       filename : 'main.js'
    },
    module : {
        rules : [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-react',"@babel/preset-env"]
                    }
                },
                test : /\.js$/,
                exclude : /node_modules/
            }
        ]
    }
}