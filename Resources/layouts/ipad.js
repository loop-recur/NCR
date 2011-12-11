Layouts.ipad = function() {
	
	var window1 = Ti.UI.createWindow({
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
	
	var nav = Layouts.nav(main_content);

	var footer = Layouts.footer();
	
	window1.add(logo);
	window1.add(nav);
	window1.add(main_content);
	window1.add(footer);
	window1.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
		
	
}
