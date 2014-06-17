! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"container-fluid\"><div class=\"row\">Copyright: Thoughtworks Inc.</div></div>");;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/template/footer.html", ["js/lib/jade", "i18n!pages/home/template/nls/footer"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/template/footer"]= jadify(wndw.jade.helpers);
}(window));