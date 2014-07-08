! (function (wndw) {
var jadify = function (jade, _t) {
var yudify = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"container-fluid\"><div data-js-ui-tabs=\"data-js-ui-tabs\" class=\"tabs\"></div><div class=\"agents-container\"><div class=\"agents-header\"><span class=\"label\">Agents</span><button type=\"button\" disabled=\"disabled\" class=\"btn btn-default\">All</button><button type=\"button\" class=\"btn btn-default active\">Physical</button><button type=\"button\" disabled=\"disabled\" class=\"btn btn-default\">Virtual</button></div><div class=\"row\"><div id=\"agents-list\" class=\"agents-list col-md-8\"><div class=\"add-agent-action clearfix\"><button data-modal=\".add-agent-modal\" class=\"btn btn-primary add-agent pull-right\">Add Agent</button></div></div><div class=\"agents-sidebar col-md-4\"><h4>Summary</h4><hr/><table class=\"table\"><tr><td>building</td><td>2</td></tr><tr><td>idle</td><td>2</td></tr></table><h4>History</h4><hr/><table class=\"table\"><tr><td>hjstdmngbgr02/Acceptance_test</td></tr><tr><td>hjstdmngbgr02/Acceptance_test</td></tr><tr><td>hjstdmngbgr02/Acceptance_test</td></tr><tr><td>hjstdmngbgr02/Acceptance_test</td></tr><tr><td>hjstdmngbgr02/Acceptance_test</td></tr></table></div></div></div></div><div data-modal-overlay-class=\"tmpst-overlay\" class=\"hiding specify-resources modal\"><div class=\"modal-body\"><div class=\"specify-resources-message\"></div><p>(separate multiple resources name with commas)</p><p><input type=\"text\" placeholder=\"specify your resources here\" class=\"input-resources col-md-12\"/></p></div><div class=\"footer\"><button data-modal-close=\"data-modal-close\" class=\"btn btn-default specify-resources-add\">Add resources</button><button data-modal-close=\"data-modal-close\" class=\"btn btn-default specify-resources-close\">Close</button></div></div><div data-modal-overlay-class=\"tmpst-overlay\" class=\"hiding add-agent-modal modal\"><div class=\"modal-body\"><div class=\"add-agent-message\"></div><p>(Add your agent with your host and IP)</p><p><input type=\"text\" placeholder=\"specify your host here\" class=\"input-agent-host col-md-5\"/><input type=\"text\" placeholder=\"specify your ip here\" class=\"input-agent-ip col-md-5\"/></p></div><div class=\"footer\"><button data-modal-close=\"data-modal-close\" class=\"btn btn-default add-agent-button\">Add Agent</button><button data-modal-close=\"data-modal-close\" class=\"btn btn-default add-agent-close\">Close</button></div></div>");;return buf.join("");
}
return function (locals) {
if (locals && locals._t) _t = locals._t.merge(_t);
return yudify(locals);
}
};
"function" == typeof define && define.amd ? define("pages/home/services/servicesBody.html", ["js/lib/jade", "i18n!pages/home/services/nls/servicesBody"], function (e, _t) {
return jadify(e, _t); 
}) : wndw.jade.templates["pages/home/services/servicesBody"]= jadify(wndw.jade.helpers);
}(window));