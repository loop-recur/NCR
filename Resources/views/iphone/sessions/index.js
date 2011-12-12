Views.iphone.sessions.index = function(win, params, sessions) {	
	if(!params.speaker_id) {
		var logo = Ti.UI.createView({
			backgroundImage:'images/NCR_iPad_headerlogo.png',
			height:82,
			top:0,
			width:220
		});

		win.add(logo);
	}
	
	Views.iphone.sessions.table(win, sessions);
}
