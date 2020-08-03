const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // loader of html files

module.exports  = {
    entry:{ 
        main:path.join(__dirname,'/src/index.js')
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'reactgram.pk.js'
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'],
    },
    // Loaders in rules
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                    options:{presets:['@babel/preset-react']}
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // Resolver la carga de los html
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname,'/src/index.html') // define a html file for the applicaction and for bundle.
        })
    ],
    devServer:{
        watchContentBase: true,
        contentBase:path.join(__dirname,'src'), // directorio de los archivos que seran mostrados por el servidor local
        port:9000
    }
}