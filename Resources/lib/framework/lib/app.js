App = {};
App.run = Bootstrap.run;

App.action = defn(function(win, controller_action, args) {
	var osname = Ti.Platform.osname;
	var params = args || {};
	var names = controller_action.split("#");
	var controller = names[0];
	var action = names[1];
	var view = {};
	view = Views[osname] && Views[osname][controller] && Views[osname][controller][action];
	if(!view) view = Views[controller][action];		
	Controllers[controller][action](view.p(win), params);
});

App.swapView = function(view, action, params) {
	_removeChildren = function(v, children) { if (children) map(function(c){ v.remove(c); }, children); }
	
	return function(e) {
		var children = view.children;
		App.action(view, action, params);
		_removeChildren(view, children);
	}
}

App.setHost = function(url, credentials) {
	App.base_url = url;
	if(credentials) App.http_client.credentials = ('Basic ' + Titanium.Utils.base64encode(credentials));
}
