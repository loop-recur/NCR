Views.speakers.show = function(win, speaker) {	
	var view = Ti.UI.createView({
		backgroundImage:"images/phones/NCR_iPhone_main_bg.png"
	});
	
	var name = Ti.UI.createLabel({
		font:{fontFamily:'GillSans',fontSize:"20dp",fontWeight:'regular'},
		color:'#444444',
		height:49,
		text:speaker.name,
		top:20,
		left:27,
		width:280
	});
	
	var bio = Ti.UI.createLabel({
		top:80,
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
	
	var session_view = Ti.UI.createView({
		bottom:0,
		height:150
	});
	
	App.action(session_view, "sessions#index", {speaker_id: speaker.id});
	
	view.add(name);
	view.add(bio);
	
	win.add(view);
	win.add(session_view);
}
