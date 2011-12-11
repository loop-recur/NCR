Layouts.ipad = function() {
	
	var main_window = Ti.UI.createWindow({
		backgroundImage:'images/NCR_iPad2_main_bg.png',
		top:0,
		bottom:0,
		left:0,
		right:0
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
	
	var nav = Layouts.nav(main_content, main_window);

	var footer = Layouts.footer();
	
	main_window.add(logo);
	main_window.add(nav);
	main_window.add(main_content);
	main_window.add(footer);
	main_window.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	
}
