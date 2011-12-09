Views.sessions.index = function(win, sessions) {	
	var view = Ti.UI.createView({
		backgroundColor: "#FFFFFF"
	});
	
	var createTableViewRow = function(x) {
		var start = Date.parse(x.start_time);
		var end = Date.parse(x.end_time);
				
		return Ti.UI.createTableViewRow({
			title:x.title + " " + Formatter.timeSpan([start, end]),
			session: x
		});
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, sessions),
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}