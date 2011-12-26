Views.speakers.show = function(win, speaker) {	
	win.barColor = "black";
	
	var view = Ti.UI.createView({
		backgroundImage:"images/phones/NCR_iPhone_main_bg.png"
	});
	
	var name = Ti.UI.createLabel({
		font:{fontFamily:'GillSans',fontSize:"20dp",fontWeight:'regular'},
		color:'#444444',
		height:22,
		text:speaker.name,
		top:20,
		left:27,
		width:280
	});
	
	var company = Ti.UI.createLabel({
		font:{fontFamily:'GillSans-Light',fontSize:"15dp",fontWeight:'regular'},
		color:'#444444',
		height:22,
		text:speaker.company,
		top:42,
		left:38,
		width:280
	});
	
	var bio = Ti.UI.createLabel({
		top:65,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#666666',
		height:105,
		text:speaker.bio,
		left:27,
		width:280
	});
	
	var divider = Ti.UI.createView({
		backgroundImage:"images/iphone-show/NCR_iPhone_shadow_divider.png",
		top:180,
		height:13,
		width:320
	});

	view.add(divider);
	
	var sessions = Ti.UI.createLabel({
		top:195,
		font:{fontFamily:'Helvetica',fontSize:"17dp",fontWeight:'bold'},
		color:'#444444',
		height:20,
		text:"Sessions:",
		left:15,
	});
	
	view.add(sessions);
	
	
	var session_view = Ti.UI.createView({
		bottom:0,
		height:150
	});
	
	App.action(session_view, "sessions#index", {speaker_id: speaker.id});
	
	view.add(name);
	view.add(company);
	view.add(bio);
	
	win.add(view);
	win.add(session_view);
}
