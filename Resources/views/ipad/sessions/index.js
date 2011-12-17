Views.ipad.sessions.index = function(win, params, sessions) {	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createHeaderRow = function(date) {
		var date = Ti.UI.createLabel({
			text:date, 
			font:{fontFamily:'HelveticaNeue-Bold',fontSize:"20dp"},
			color:"white",
			left:10,
			height:40,
			width:"100%"
		});
		
		var row = Ti.UI.createTableViewRow({
			height:40,
			opacity:0.75,
			backgroundGradient:{type:'linear',
			colors:['#666666','#000001'],
			backFillStart:false},
		});
		
		row.add(date);
		return row;
	}
	
	var createTableViewRow = function(session) {		
		var start = Date.parse(session.start_time);
		var end = Date.parse(session.end_time);
		
		var session = session;
		var title = session.title;
		var description = session.description;
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
		
		var addSpeaker = function(speaker) {
			var name = Ti.UI.createLabel({
				text:"Speaker: " + speaker.name, 
				font:{fontFamily:'HelveticaNeue,',fontSize:"14dp"},
				color:"#666666",
				top: 55,
				left:10
			});

			row.add(name);
		}

		if(session.speaker_id) Controllers.speakers.show(addSpeaker, {id: session.speaker_id});
		
		return row;
	}
	
	var createGroupedRow = function(date, sessions) {
		return flatten([createHeaderRow(date), map(createTableViewRow, sessions)]);
	}
	
	var createData = compose(flatten, omap(createGroupedRow));
	
	var tableView = Ti.UI.createTableView({
		data:createData(sessions),
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}
