'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

const webpack = require('webpack');
const path = require('path');

build.configureWebpack.mergeConfig({
   additionalConfiguration: (generatedConfiguration) => {
      
      generatedConfiguration.plugins.push(new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, path.join(__dirname, './client')));
      
      return generatedConfiguration;
   }
});

build.initialize(gulp);
