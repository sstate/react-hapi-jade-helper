'use strict';

var React = require('react');
var serialize = require('serialize-javascript');

var ReactHelpers = {
  reactLayoutHandler: function (options) {
    options.reply.view(options.jade_layout || 'index', {
      layout_data: options.layout_data,
      reactComponent: React.renderToString(React.createElement(options.layout, {view: options.component, state_data: serialize(options.layout_data.state_data)}))
    });
  }
};

module.exports = ReactHelpers;
