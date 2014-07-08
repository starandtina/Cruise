define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/util',
  'js/lib/modals',
  'js/lib/backbone.widgetview',
  'js/collections/instances',
  'pages/home/services/servicesBody.html',
  'pages/home/template/tab.html',
  'pages/home/services/instance.html'
], function ($, _, Backbone, Util, Modal, WidgetView, InstanceList, ServicesTpl, TabTpl, InstanceTpl) {
  'use strict';

  var InstanceView = Backbone.View.extend({
    dom: {
      DEL_RESOURCE: '.del-resource',
      ADD_RESOURCE: '.add-resource'
    },
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
    events: function () {
      var events = {};

      events['click ' + this.dom.DEL_RESOURCE] = 'onDelResource';
      events['click ' + this.dom.ADD_RESOURCE] = 'onAddResource';

      return events;
    },
    onDelResource: function (event) {
      var target = event.target;
      var resource = target.getAttribute('data-resource');

      var resources = this.model.get('resources').split(',');

      if (_.contains(resources, resource)) {
        this.model.set('resources', _.without(resources, resource).join(','));
      }

      return false;
    },
    onAddResource: function (event) {
      var $addResource = $('.specify-resources-add');
      var model = this.model;
      $addResource.one('click', function (event) {
        var $inputResources = $('.input-resources');
        var resources = model.get('resources').split(',');
        var inputResources = _.filter($inputResources.val().trim().split(','), function (item) {
          return item;
        });;

        model.set('resources', resources.concat(inputResources).join(','));
        $inputResources.val('');
      });

      //Modal('.specify-resources', modalOptions).open();
    },
    destroy: function () {
      this.model.destroy();
    }
  });

  return InstanceView;
});