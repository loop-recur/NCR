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
		
		var spinner = Ti.UI.createActivityIndicator({
			style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
			height:30,
			width:30
		});
		
		view.add(spinner);
		spinner.show();
		
		Ti.App.addEventListener('hide_activity_indicator', function(e) {
			spinner.hide();
			view.remove(spinner);
		});
		
		App.action(view, action, params);
		App.removeChildren(view, children);
	}
}

App.animateToView = function(tab) {
	_getTitle = compose(Formatter.titleize, first, split("#"));
	
	return function(e) {
		var win = Ti.UI.createWindow({title:(e.title || _getTitle(e.action)), navBarHidden:false, orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]});
		App.action(win, e.action, e.params);
		tab.open(win,{animated:true});
	}
}

App.setHost = function(url, credentials) {
	App.base_url = url;
	if(credentials) App.http_client.credentials = ('Basic ' + Titanium.Utils.base64encode(credentials));
}
