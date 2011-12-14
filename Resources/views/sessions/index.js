Views.sessions.index = function(win, params, sessions) {	
	if(!params.speaker_id) {
		var logo = Ti.UI.createView({
			backgroundImage:'images/iphone/NCR_iPhone_main_header.png',
			height:82,
			top:5,
			width:220
		});

		win.add(logo);
		
		var view = Ti.UI.createView({
			top:82
		});

		win.add(view);
		Views.sessions.table(view, sessions);
	} else {
		Views.sessions.table(win, sessions);
	}
}
