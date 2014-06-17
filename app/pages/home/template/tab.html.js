! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (currentTabId, _t) {
var tabItems = [{id: '1', url: '/dashboard', label: 'Dashboard', 'icon': 'dashboard'}, {url: '/cruise', label: 'Cruise', id: '2', 'icon': 'bookmark'}, {url: '/agents', label: 'Agents', id: '3', 'icon': 'bookmark'}, {url: '/help', label: 'Help', id: '4', 'icon': 'bookmark'}].reverse()
buf.push("<div class=\"ui-tab\"><ul class=\"tab-list clearfix\">");
// iterate tabItems
;(function(){
  var $$obj = tabItems;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var tab = $$obj[$index];

if ( currentTabId == tab.id)
{
buf.push("<li class=\"selected\"><a" + (jade.attr("href", "" + (tab.url) + "", true, false)) + " class=\"tab internal-home\">" + (jade.escape(null == (jade_interp = _t[tab.label]) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", "" + (tab.url) + "", true, false)) + " class=\"tab internal-home\">" + (jade.escape(null == (jade_interp = _t[tab.label]) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var tab = $$obj[$index];

if ( currentTabId == tab.id)
{
buf.push("<li class=\"selected\"><a" + (jade.attr("href", "" + (tab.url) + "", true, false)) + " class=\"tab internal-home\">" + (jade.escape(null == (jade_interp = _t[tab.label]) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", "" + (tab.url) + "", true, false)) + " class=\"tab internal-home\">" + (jade.escape(null == (jade_interp = _t[tab.label]) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div>");}("currentTabId" in locals_for_with?locals_for_with.currentTabId:typeof currentTabId!=="undefined"?currentTabId:undefined,"_t" in locals_for_with?locals_for_with._t:typeof _t!=="undefined"?_t:undefined));;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/template/tab.html", ["js/lib/jade", "i18n!pages/home/template/nls/tab"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/template/tab"]= jadify(wndw.jade.helpers);
}(window));