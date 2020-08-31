const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // loader of html files
// const FaviconsPlugin = require("favicons-webpack-plugin");

module.exports  = {
    entry:{ 
        main:path.join(__dirname,'src/index.js')
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
            } ,                    
            {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
            },
           /*  {
                test: /\.html$/i,
                loader: 'html-loader'
            }, */
            /* {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loader:'url-loader'
                loader:'url?limit=25000'
            } */
        ]
    },
    // Resolver la carga de los html
    plugins: [        
        new HtmlPlugin({
            //  favicon:path.join(__dirname,'/src/public/favicon.png'
            template: path.join(__dirname,'src/public/index.html') // define a html file for the applicaction and for bundle.
        }),
      /*   new FaviconsPlugin({
            logo: path.join(__dirname, 'src/public/favicon.png')            
        })  */
    ],
    devServer:{
        watchContentBase: true,
        // contentBase:__dirname, // directorio de los archivos que seran mostrados por el servidor local
        // publicPath: '/',
        historyApiFallback: true,
        open: true, // open web browser
        port:9000,
    }
}