App = {};
App.run = Bootstrap.run;

App.action = defn(function(win, controller_action, args) {
	var params = args || {};
	var names = controller_action.split("#");
	var controller = names[0];
	var action = names[1];
	var view = (Views[controller] && Views[controller][action]) ? Views[controller][action] : {};
	Controllers[controller][action](view.p(win), params);
});

App.swapView = function(view) {
	_removeChildren = function(v) { if (v.children) map(function(c){ v.remove(c); }, v.children); }
	
	return function(e) {
		_removeChildren(view);
		App.action(view, e.action, e.args);
	}
}

App.setHost = function(url, credentials) {
	App.base_url = url;
	if(credentials) App.http_client.credentials = ('Basic ' + Titanium.Utils.base64encode(credentials));
}
