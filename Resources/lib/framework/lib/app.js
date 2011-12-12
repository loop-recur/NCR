App = {};
App.run = Bootstrap.run;

App.action = defn(function(win, controller_action, args) {
	var osname = Ti.Platform.osname
	, params = args || {}
	, names = controller_action.split("#")
	, controller = names[0]
	, action = names[1]
	, view = null;
	
	view = params.skip_os_path ? Views[controller][action] : Views[osname] && Views[osname][controller] && Views[osname][controller][action];
	if(!view) view = Views[controller][action];
	Controllers[controller][action](view.p(win), params);
});

App.removeChildren = function(view, children) {
	if(children) map(function(c){ view.remove(c); }, children);
}

App.swapView = function(view, action, params) {	
	return function(e) {
		var children = view.children;
		App.action(view, action, params);
		App.removeChildren(view, children);
	}
}

App.setHost = function(url, credentials) {
	App.base_url = url;
	if(credentials) App.http_client.credentials = ('Basic ' + Titanium.Utils.base64encode(credentials));
}
