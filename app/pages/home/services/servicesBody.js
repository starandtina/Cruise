define([
  'jquery',
  'underscore',
  'backbone',
  'js/lib/util',
  'js/collections/instances',
  'js/models/instance',
  'js/views/instance',
  'pages/home/services/servicesBody.html',
  'pages/home/template/body',
  'pages/home/template/tab.html'
], function ($, _, Backbone, Util, InstanceList, Instance, InstanceView, ServicesTpl, BodyView, TabTpl) {
  'use strict';

  var ServiceBodyView = BodyView.extend({
    dom: {
      TABS: '[data-js-ui-tabs]',
      CREATE_INSTANCE: '.create-instance',
      CREATE_AGENT: '.create-agent',
      INSTANCE_CONTAINER: '#agents-list'
    },
    initialize: function () {
      BodyView.prototype.initialize.call(this, arguments);

      // act as internal anchor,  pass the 'section' into the view, and use JS to jump to that part of the view, post-rendering
      var that = this;
      this.on('view:merged', function (options) {
        if (options && options.section) {
          Util.scrollToInternalLink(that.$el, options.section);
        } else {
          window.scrollTo(0, 0);
        }
      });

      this.instanceList = new InstanceList();

      this.listenTo(this.instanceList, 'add', this.addOne);
      this.listenTo(this.instanceList, 'reset', this.addAll);


      //this.instanceList.fetch();
    },
    render: function () {
      this.$el.html(ServicesTpl());
      this.$(this.dom.TABS).html(TabTpl({
        currentTabId: 3
      }));

      var models = [
        new Instance({
          name: 'hjstdmngbgr02.thoughtworks.com',
          status: 'building',
          ip: '192.168.1.2',
          filePath: '/var/lib/cruise-agent',
          resources: 'ubuntu,firefox3,core-duo'
        }),
        new Instance({
          name: 'hjstdmngbgr03.thoughtworks.com',
          status: 'idle',
          ip: '192.168.1.3',
          filePath: '/var/lib/cruise-agent',
          resources: 'ubuntu,firefox3,mysql,core-duo'
        }),
        new Instance({
          name: 'hjstdmngbgr04.thoughtworks.com',
          status: 'idle',
          ip: '192.168.1.4',
          filePath: '/var/lib/cruise-agent',
          resources: 'ubuntu,firefox3,mysql,core-duo'
        }),
        new Instance({
          name: 'hjstdmngbgr05.thoughtworks.com',
          status: 'building',
          ip: '192.168.1.5',
          filePath: '/var/lib/cruise-agent',
          resources: ''
        })
      ];

      this.instanceList.reset(models);

      return this;
    },
    events: function () {
      var events = {};

      events['click .add-agent'] = this.addAgent;

      return events;
    },
    addAgent: function () {
      var $addAgent = $('.add-agent-button');
      var model = this.model;
      var me = this;
      $addAgent.one('click', function (event) {
        var name = $('.input-agent-host').val();
        var ip = $('.input-agent-ip').val();

        var defaultInstance = {
          name: 'hjstdmngbgr05.thoughtworks.com',
          status: 'building',
          ip: '192.168.1.5',
          filePath: '/var/lib/cruise-agent',
          resources: ''
        };

        me.instanceList.add(_.extend(defaultInstance, {
          name: name,
          ip: ip
        }));
      });
    },
    addOne: function (instance) {
      var index = ~~this.instanceList.models.indexOf(instance);
      var view = new InstanceView({
        model: instance
      });

      this.$(this.dom.INSTANCE_CONTAINER).append(view.render({
        index: ++index
      }).el);
    },
    addAll: function () {
      this.instanceList.each(this.addOne, this);
    },
    hasUnsavedModel: function () {
      return false;
    }
  });

  return ServiceBodyView;
});