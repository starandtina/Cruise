! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (user, _t) {
buf.push("<div class=\"container-fluid\"><div class=\"row\"><div class=\"tmpst-header-primary\"></div><div class=\"tmpst-header-secondary\"><a class=\"tmpst-header-link internal-home\">Signed in as <u>" + (jade.escape(null == (jade_interp = user.name) ? "" : jade_interp)) + "</u></a><a href=\"/logout\" class=\"tmpst-header-link internal-home\"><i class=\"fa fa-arrow-right\"><u>" + (jade.escape(null == (jade_interp = _t['Logout']) ? "" : jade_interp)) + "</u></i></a></div></div></div>");}("user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined,"_t" in locals_for_with?locals_for_with._t:typeof _t!=="undefined"?_t:undefined));;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/template/header.html", ["js/lib/jade", "i18n!pages/home/template/nls/header"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/template/header"]= jadify(wndw.jade.helpers);
}(window));