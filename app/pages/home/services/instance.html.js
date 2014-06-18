! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, status, ip, filePath, resources) {
buf.push("<div class=\"row\"><div class=\"col-md-1\"><div class=\"circle\"></div></div><div class=\"col-md-11\"><div class=\"agent-content\"><span><strong>" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</strong></span><span style=\"margin: 0 5px;color:gray;\">|</span><span>" + (jade.escape(null == (jade_interp = status) ? "" : jade_interp)) + "</span><span style=\"margin: 0 5px;color:gray;\">|</span><span>" + (jade.escape(null == (jade_interp = ip) ? "" : jade_interp)) + "</span><span style=\"margin: 0 5px;color:gray;\">|</span><span>" + (jade.escape(null == (jade_interp = filePath) ? "" : jade_interp)) + "</span></div><div><i data-modal=\".specify-resources\" class=\"fa fa-plus add-resource\"><u>Specify Resources</u></i><span style=\"margin: 0 5px;color:gray;\">| </span><span>Resources:");
if ( resources)
{
// iterate resources.split(',')
;(function(){
  var $$obj = resources.split(',');
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var r = $$obj[$index];

buf.push("<span>" + (jade.escape(null == (jade_interp = r) ? "" : jade_interp)) + "<i" + (jade.attr("data-resource", "" + (r) + "", true, false)) + " class=\"fa fa-times-circle del-resource\"></i></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var r = $$obj[$index];

buf.push("<span>" + (jade.escape(null == (jade_interp = r) ? "" : jade_interp)) + "<i" + (jade.attr("data-resource", "" + (r) + "", true, false)) + " class=\"fa fa-times-circle del-resource\"></i></span>");
    }

  }
}).call(this);

}
buf.push("</span></div></div></div>");}("name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"status" in locals_for_with?locals_for_with.status:typeof status!=="undefined"?status:undefined,"ip" in locals_for_with?locals_for_with.ip:typeof ip!=="undefined"?ip:undefined,"filePath" in locals_for_with?locals_for_with.filePath:typeof filePath!=="undefined"?filePath:undefined,"resources" in locals_for_with?locals_for_with.resources:typeof resources!=="undefined"?resources:undefined));;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/services/instance.html", ["js/lib/jade", "i18n!pages/home/services/nls/instance"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/services/instance"]= jadify(wndw.jade.helpers);
}(window));