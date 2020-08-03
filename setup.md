#### 1. Initialize project 

Here we are going to generate a __package.json__ file need to run our project.

 ```sh 
$ npm init -y
 ```

 #### 2. We create project directory and config

 We are going to create a directory call it: **src** then inside 2 file more: **index.html** and **index.js**

```
 src/
    index.html
    index.js
```

In the index.html write a html element with the reference id for the app:

```html
...
    <div id="root"></div>
...
```

In the **package.json** we can configurate to run and build our app adding the next script:
```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```


#### 3. Now we're going to install Webpack

#####  3.1 Install webpack:

- **webpack**: main package
- **webpack-cli**: package to use webpack command line 
- **webpack-dev-server**: package to execute a local server our app and that we can see changes on real time. 

```sh
$ npm  i -D webpack webpack-cli webpack-dev-server
```

##### 3.1 Config Webpack:

1. Create file: **/webpack.config.js** in the project root.
2. Paste the next configuration:
```js
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // Install this module for load html
module.exports = {
  // APP ENTRY POINT
  entry: {main:path.join(__dirname,'/src/index.js')}, // The main js file when the webpack point

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'public'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
      extensions:['.js','.jsx','.json'], // Resolve extension when has the same name but with different extension.
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
    // RESOLVE LOAD HTML FILES FOR THE APP
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname,'/src/index.html') // define a html file for the applicaction and for bundle.
        })
    ],
  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.join(__dirname,'src')
  }
};
```
3. Remember install **Path** from command line before to run it:
```sh 
$ npm i -D path
```

4. To run and build our app

Run 1:
```sh
$ npm run start  // this run command configured in script of the package.json 
```
Run 2:
```sh
$ npx webpack-dev-server -D  // this run command direct from npx 
```
Build:
```sh
$ npm run build // this run command configured in scripts of the package.json 
```
#### 3.2 Install / config Babel Loader and CSS / Styles loader

Babel is used to **transpile javascript code / react** to ES5 that is supported by all web browsers.

```sh
$ npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```
Then we're going to modify **webpack.config.js** and add **babel-loader** and **css/styles loader** but before we must to install css-loader and style-loader
```sh
$ npm i -D css-loader style-loader
```
Now add next into webpack-config.js
```js 
...
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
...
```

#### 4. Install / Config  React JS modules

```sh
$ npm i -D react react-dom
```
Ready! we have all to start to create our applications.

[Tutorial Webpack+react+babel](https://gpolanco.com/configurar-react-desde-cero-con-webpack-y-babel/)
[Youtube Webpack+react+babel](https://www.youtube.com/watch?v=e_oGhRHDzcc)
