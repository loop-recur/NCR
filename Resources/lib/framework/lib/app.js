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
	if(children) map(function(c){ view.remove(c); c = null; children = null; }, children);
}

App.swapView = function(view, action, params) {	
	return function(e) {
		var children = view.children;
		App.action(view, action, params);
		App.removeChildren(view, children);
	}
}

App.animateToView = function(tab) {
	_getTitle = compose(Formatter.titleize, first, split("#"));
	
	return function(e) {
		var win = Ti.UI.createWindow({title:(e.title || _getTitle(e.action)), navBarHidden:false});
		App.action(win, e.action, e.params);
		tab.open(win,{animated:true});
	}
}

App.setHost = function(url, credentials) {
	App.base_url = url;
	if(credentials) App.http_client.credentials = ('Basic ' + Titanium.Utils.base64encode(credentials));
}
