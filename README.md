# React Starterkit

## Installation

Install all dependencies. 

```
$ npm install
```


## Development

Do node server for starting the server and gulp will start a watch task
```
$ node server
$ gulp
```

## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```


## Javascript

Javascript entry file: `app/scripts/main.js` <br />

**Flux - Alt**

**React-Router**

The routing is done with the [react-router](https://github.com/rackt/react-router). It's especially great for SPA's. We would recommend to read the [guide](https://github.com/rackt/react-router/blob/master/docs/guides/overview.md) to get an overview of the router features.


## CSS

CSS entry file: `app/stylus/main.styl`<br />

**Stylus**

As you can see we are using stylus to preprocess our .styl files. If you didn't work with a css preprocessor before the [stylus page](http://learnboost.github.io/stylus/) is a good starting point to get to know what stylus can do for you.<br /><br />
If you want to use third-party CSS you just include it via `@import 'path/to/your/third-party-styles.css'` at the top of the main.styl file.


## Webpack Hints

You can find the webpack configuration in the [webpack.config.js file](./webpack.config.js).
We use the jsx-loader in order to load .jsx and .js files via webpack. If it's possible install all your dependencies with NPM. Packages installed with NPM can be used like this:

```language-javascript

var moduleXYZ = require('moduleXYZ');

```
You can find all loaders in this [list](http://webpack.github.io/docs/list-of-loaders.html).


###Requirements
* node
* npm
* gulp
