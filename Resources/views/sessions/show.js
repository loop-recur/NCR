Views.sessions.show = function(win, session) {	
	var view = Ti.UI.createView({
		backgroundColor: "white"
	});
	
	var title = Ti.UI.createLabel({
		text:session.title, 
		font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
		color:"#444444",
		left:10,
		top:20,
		height:"auto",
		width:"auto"
	});
		
	var description = Ti.UI.createLabel({
		text:session.description, 
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:"#333333",
		left:35,
		top:35,
		height:"auto",
		width:"auto"
	});
		
	view.add(title);
	view.add(description);
	
	win.add(view);
}
