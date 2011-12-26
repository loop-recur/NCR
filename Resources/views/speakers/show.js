Views.speakers.show = function(win, speaker) {	
	win.barColor = "black";
	
	var view = Ti.UI.createView({
		backgroundImage:"images/phones/NCR_iPhone_main_bg.png"
	});
	
	var name = Ti.UI.createLabel({
		font:{fontFamily:'GillSans',fontSize:"20dp",fontWeight:'regular'},
		color:'#444444',
		height:"22dp",
		text:speaker.name,
		top:"20dp",
		left:"27dp",
		width:"280dp"
	});
	
	var company = Ti.UI.createLabel({
		font:{fontFamily:'GillSans-Light',fontSize:"15dp",fontWeight:'regular'},
		color:'#444444',
		height:"22dp",
		text:speaker.company,
		top:"42dp",
		left:"38dp",
		width:"280dp"
	});
	
	var bio = Ti.UI.createLabel({
		top:"65dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#666666',
		height:"105dp",
		text:speaker.bio,
		left:"27dp",
		width:"280dp"
	});
	
	var divider = Ti.UI.createView({
		backgroundImage:"images/iphone-show/NCR_iPhone_shadow_divider.png",
		top:"180dp",
		height:"13dp",
		width:"320dp"
	});

	view.add(divider);
	
	var sessions = Ti.UI.createLabel({
		top:"195dp",
		font:{fontFamily:'Helvetica',fontSize:"17dp",fontWeight:'bold'},
		color:'#444444',
		height:"20dp",
		text:"Sessions:",
		left:"15dp",
	});
	
	view.add(sessions);
	
	
	var session_view = Ti.UI.createView({
		bottom:0,
		height:"150dp"
	});
	
	App.action(session_view, "sessions#index", {speaker_id: speaker.id});
	
	view.add(name);
	view.add(company);
	view.add(bio);
	
	win.add(view);
	win.add(session_view);
}
