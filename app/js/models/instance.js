define([
  'underscore',
  'backbone',
  'js/app/home',
  'js/lib/backbone.api'
], function (_, Backbone, Tmpst, BackboneModelAPI) {
  'use strict';

  var Instance = Backbone.Model.extend({
    defaults: {
      name: null,
      status: null,
      ip: null,
      filePath: null,
      resources: null
    },
    api: Tmpst.api,
    url: '/instances',
    validation: {
      name: {
        required: true
      },
      status: {
        required: true
      },
      ip: {
        required: true
      },
      filePath: {
        required: true
      },
      resources: {
        required: true
      },
    },
    initialize: function () {
      this.listenTo(this, 'validated', this.handleError);
    },
    handleError: function (isValid, model, errorList) {
      var errorMsg = '';

      if (!isValid) {
        errorMsg = _.map(errorList, function (error) {
          return '✗ ' + error;
        }).join('<br/>');
      }

      $('.validation-error').html(errorMsg);
    },
    labels: {
      'password-repeat': 'Confirm Password'
    }
  });

  _.extend(Instance.prototype, BackboneModelAPI);

  return Instance;
});