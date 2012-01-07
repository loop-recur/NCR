Layouts.ipad.application = function() {
	
	var main_window = Ti.UI.createWindow({
		backgroundImage:'images/NCR_iPad2_main_bg.png',
		top:0,
		bottom:0,
		left:0,
		right:0,
		orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
	});

	var logo = Ti.UI.createView({
		backgroundImage:'images/NCR_iPad_headerlogo.png',
		height:150,
		top:10,
		width:400
	});

	var main_content = Ti.UI.createView({
		top: 311,
		height: "48%"
	});
	
	var nav = Layouts.ipad.nav(main_content, main_window);

	var footer = Layouts.ipad.footer();
	
	main_window.add(logo);
	main_window.add(nav);
	main_window.add(main_content);
	main_window.add(footer);
	main_window.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	setTimeout(DbUpdater.update, 3000);
}
