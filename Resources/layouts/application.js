Layouts.application = function() {
	
	var window1 = Ti.UI.createWindow({
		backgroundColor:'#ffffffff',
		height:768,
		width:1024
	});

	var logo = Ti.UI.createView({
		backgroundColor:'orange',
		height:150,
		top:0,
		width:400
	});

	var nav = Layouts.nav();
	
	var main_content = Ti.UI.createView({
		backgroundColor:'green',
		top: 311,
		height: "40%"
	});

	var footer = Layouts.footer();
	
	window1.add(logo);
	window1.add(nav);
	window1.add(main_content);
	window1.add(footer);
	window1.open();
		
	Ti.App.addEventListener('swapMain', App.swapView(main_content));
}
