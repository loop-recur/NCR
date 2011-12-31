Views.sessions.index = function(win, params, sessions) {	
	if(!params.speaker_id) {
		var logo = Ti.UI.createView({
			backgroundImage:'images/phones/NCR_iPhone_main_header.png',
			height:"105dp",
			top:"5dp",
			width:"320dp"
		});

		win.add(logo);
		
		var view = Ti.UI.createView({
			top:"105dp"
		});

		win.add(view);
		Views.sessions.table(view, sessions);
	} else {
		Views.sessions.table(win, sessions);
	}
}
