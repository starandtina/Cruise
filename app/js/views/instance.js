define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/util',
  'js/lib/backbone.widgetview',
  'js/collections/instances',
  'pages/home/services/servicesBody.html',
  'pages/home/template/tab.html',
  'pages/home/services/instance.html'
], function ($, _, Backbone, Util, WidgetView, InstanceList, ServicesTpl, TabTpl, InstanceTpl) {
  'use strict';

  var InstanceView = Backbone.View.extend({
    className: function () {
      return 'agent-item ' + this.model.get('status');
    },
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.destroy);
    },
    render: function (options) {
      var data = this.model.toJSON();

      this.$el.html(InstanceTpl(_.extend(data, options)));

      return this;
    },
    destroy: function () {
      this.model.destroy();
    }
  });

  return InstanceView;
});