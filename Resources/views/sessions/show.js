Views.sessions.show = function(win, session) {
	win.barColor = "black";
		
	var start = Date.parse(session.start_time);
	var end = Date.parse(session.end_time);
	var time = Formatter.timeSpan([start, end]);
	
	var view = Ti.UI.createView({
		backgroundImage:"images/phones/NCR_iPhone_main_bg.png"
	});

	var title = Ti.UI.createLabel({
		font:{fontFamily:'GillSans',fontSize:"20dp",fontWeight:'regular'},
		color:'#444444',
		height:49,
		text:session.title,
		top:20,
		left:27,
		width:280
	});
	
	var description = Ti.UI.createLabel({
		top:117,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#666666',
		height:105,
		text:session.description,
		left:27,
		width:280
	});
	
	var speakers = Ti.UI.createLabel({
		top:79,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:35,
		text:'Speakers',
		left:20,
		width:217
	});
	
	var divider = Ti.UI.createView({
		backgroundImage:"images/iphone-show/NCR_iPhone_shadow_divider.png",
		top:220,
		height:13,
		width:320
	});

	view.add(divider);

	var date_label = Ti.UI.createLabel({
		top:228,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:35,
		text: session.date.toString('MM/dd/yyyy'),
		left:75,
		width:217
	});

	view.add(date_label);

	var time_label = Ti.UI.createLabel({
		top:274,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:35,
		text:time,
		left:75,
		width:217
	});

	view.add(time_label);

	var location_label = Ti.UI.createLabel({
		top:322,
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:35,
		text:session.location,
		left:75,
		width:217
	});

	view.add(location_label);

	var date_icon = Ti.UI.createView({
		backgroundImage:'images/iphone-show/NCR_iPhone_calendar_icon.png',
		top:238,
		height:15,
		left:42,
		width:16
	});

	view.add(date_icon);

	var clock_icon = Ti.UI.createView({
		backgroundImage:'images/phones/NCR_iPhone_clock_icon.png',
		top:284,
		height:15,
		left:42,
		width:16
	});

	view.add(clock_icon);

	var location_icon = Ti.UI.createView({
		backgroundImage:'images/iphone-show/NCR_iPhone_location_icon.png',
		top:332,
		height:15,
		left:42,
		width:16
	});
	
	view.add(location_icon);
	
	view.add(title);
	view.add(description);
	
	win.add(view);
}
