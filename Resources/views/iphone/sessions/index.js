Views.iphone.sessions.index = function(win, sessions) {	
	var view = Ti.UI.createView({
		backgroundColor: "blue"
	});
	
	var createTableViewRow = function(x) {
		var start = Date.parse(x.start_time);
		var end = Date.parse(x.end_time);
		
		var session = x;
		var title = x.title;
		var description = x.description;
		var time = Formatter.timeSpan([start, end]);
		
		var title = Titanium.UI.createLabel({
			text:title, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:10,
			top:20,
			height:"auto",
			width:"auto"
		});
			
		var description = Titanium.UI.createLabel({
			text:description, 
			font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
			color:"#333333",
			left:35,
			top:35,
			height:"auto",
			width:"auto"
		});
		
		var time = Titanium.UI.createLabel({
			text:time, 
			font:{fontFamily:'GillSans',fontSize:"16dp",fontWeight:'bold'},
			color:"#444444",
			right:10,
			bottom:0,
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:80
		});
		
		row.add(title);
		row.add(description);
		row.add(time);
		
		return row;
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, sessions),
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}
