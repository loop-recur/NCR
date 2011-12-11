Views.sessions.index = function(win, sessions) {	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createHeaderRow = function(date) {
		var name = Ti.UI.createLabel({
			text:date, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"white",
			left:10,
			top:20,
			height:40,
			width:"100%"
		});
		
		var row = Ti.UI.createTableViewRow({
			height:60,
			backgroundColor: "orange"
		});
		
		row.add(name);
		return row;
	}
	
	var createTableViewRow = function(x) {
		var start = Date.parse(x.start_time);
		var end = Date.parse(x.end_time);
		
		var session = x;
		var title = x.title;
		var description = x.description;
		var time = Formatter.timeSpan([start, end]);
		
		var title = Ti.UI.createLabel({
			text:title, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:10,
			top:20,
			height:"auto",
			width:"auto"
		});
			
		var description = Ti.UI.createLabel({
			text:description, 
			font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
			color:"#333333",
			left:35,
			top:35,
			height:"auto",
			width:"auto"
		});
		
		var time = Ti.UI.createLabel({
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
	
	var createGroupedRow = function(date, sessions) {
		return flatten([createHeaderRow(date), map(createTableViewRow, sessions)]);
	}
	
	var data = compose(flatten, omap(createGroupedRow))(sessions);
	
	var tableView = Ti.UI.createTableView({
		data:data,
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}