Helpers.ui = {};

Helpers.ui.addNav = function(win, title, fun) {
	if(isAndroid) return;
	
	var nav_button = Titanium.UI.createButton({
		title:title
	});
	
	nav_button.addEventListener('click', function() {
		win.leftNavButton = null;
		fun(win);
	});
	
	win.leftNavButton = nav_button;
	
	return nav_button;
}

Helpers.ui.confirm = function(title, message, callbacks) {
	if (!callbacks.cancel) callbacks.cancel = function() {};
	var alert = Titanium.UI.createAlertDialog({ 
		title:title, 
		message: message, 
		buttonNames: ['Yes', 'Cancel'], 
		cancel:1 
	});
	
	alert.addEventListener('click', function(e) { 
		if (e.cancel === e.index || e.cancel === true) {return;}
		(e.index === 0) ? callbacks.yes() : callbacks.cancel();
	});
		
	alert.show();
}

Helpers.ui.spinner = function(props) {
	var activity = Ti.UI.createActivityIndicator(merge({
		height:"26dp",
		width:"26dp",
	}, props));
	
	Ti.App.addEventListener('show_activity_indicator', function() { activity.show(); });
	Ti.App.addEventListener('hide_activity_indicator', function() { activity.hide(); });
	
	return activity;
};
