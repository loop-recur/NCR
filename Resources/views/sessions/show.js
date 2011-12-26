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
		height:"49dp",
		text:session.title,
		top:"20dp",
		left:"27dp",
		width:"280dp"
	});
	
	var description = Ti.UI.createLabel({
		top:"117dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#666666',
		height:"105dp",
		text:session.description,
		left:"27dp",
		width:"280dp"
	});
	
	var speakers = Ti.UI.createLabel({
		top:"79dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:"35dp",
		text:'Speakers',
		left:"20dp",
		width:"217dp"
	});
	
	var divider = Ti.UI.createView({
		backgroundImage:"images/iphone-show/NCR_iPhone_shadow_divider.png",
		top:"220dp",
		height:"13dp",
		width:"320dp"
	});

	view.add(divider);

	var date_label = Ti.UI.createLabel({
		top:"228dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:"35dp",
		text: session.date.toString('MM/dd/yyyy'),
		left:"75dp",
		width:"217dp"
	});

	view.add(date_label);

	var time_label = Ti.UI.createLabel({
		top:"274dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:"35dp",
		text:time,
		left:"75dp",
		width:"217dp"
	});

	view.add(time_label);

	var location_label = Ti.UI.createLabel({
		top:"322dp",
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:'#444444',
		height:"35dp",
		text:session.location,
		left:"75dp",
		width:"217dp"
	});

	view.add(location_label);

	var date_icon = Ti.UI.createView({
		backgroundImage:'images/iphone-show/NCR_iPhone_calendar_icon.png',
		top:"238dp",
		height:"15dp",
		left:"42dp",
		width:"16dp"
	});

	view.add(date_icon);

	var clock_icon = Ti.UI.createView({
		backgroundImage:'images/phones/NCR_iPhone_clock_icon.png',
		top:"284dp",
		height:"15dp",
		left:"42dp",
		width:"16dp"
	});

	view.add(clock_icon);

	var location_icon = Ti.UI.createView({
		backgroundImage:'images/iphone-show/NCR_iPhone_location_icon.png',
		top:"332dp",
		height:"15dp",
		left:"42dp",
		width:"16dp"
	});
	
	view.add(location_icon);
	
	view.add(title);
	view.add(description);
	
	win.add(view);
}
