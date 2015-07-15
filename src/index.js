'use strict';

var React = require('react');
var serialize = require('serialize-javascript');

var ReactHelpers = {
  reactLayoutHandler: function (options) {
    options.reply.view(options.jade_layout || 'index', {
      state_data: options.state_data,
      reactComponent: React.renderToString(React.createElement(options.layout, {view: options.component, data: serialize(options.state_data)}))
    });
  }
};

module.exports = ReactHelpers;
