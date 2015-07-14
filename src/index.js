'use strict';

var React = require('react');

var ReactHelpers = {
  reactLayoutHandler: function (options) {
    options.reply.view(options.jadeLayout || 'index', {
      layoutData: options.layoutData,
      reactComponent: React.renderToString(React.createElement(options.Layout, {view: options.component, data: options.layoutData}))
    });
  }
};

module.exports = ReactHelpers;
