Views.sessions.table = function(win, sessions) {		
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});

	var createHeaderRow = function(date) {
		var name = Ti.UI.createLabel({
			text:date, 
			font:{fontFamily:'HelveticaNeue-Bold',fontSize:"18dp"},
			color:"white",
			left:"10dp",
			height:"28dp",
			width:"100%"
		});
		
		if(isAndroid) {
			var properties = { backgroundColor: 'black'}
		} else {
			var properties = {
				opacity:0.75,
				backgroundGradient:{
					type:'linear',
					colors:['#666666','#000001'],
					backFillStart:false
				}
			}
		}

		var row = Ti.UI.createTableViewRow(merge({ height:"30dp" }, properties));
	
		row.add(name);
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
			left:"10dp",
			top:"10dp",
			height:"auto",
			width:"auto",
			id: session.id
		});
	
		var time = Ti.UI.createLabel({
			text:time, 
			font:{fontFamily:'GillSans',fontSize:"16dp",fontWeight:'bold'},
			color:"#444444",
			right:"10dp",
			bottom:0,
			height:"auto",
			width:"auto",
			id: session.id
		});
		
		var row = Ti.UI.createTableViewRow({
			height:"60dp",
			id: session.id,
			className:'session'
		});
	
		row.add(title);
		row.add(time);
	
		return row;
	}

	var createGroupedRow = function(date, sessions) {
		return flatten([createHeaderRow(date), map(createTableViewRow, sessions)]);
	}

	var tableView = Ti.UI.createTableView({
		backgroundColor:"transparent",
		bottom:0
	});
	
	var appendRow = function(row) {
		tableView.appendRow(row);
	}
	
	var createData = compose(map(appendRow), flatten, omap(createGroupedRow));
	setTimeout(createData.p(sessions), 500);

	var refreshTable = function(view, sessions, params) {
		tableView.setData([]);
		createData(sessions);
	}
	
	tableView.addEventListener('click', function(e) {
		if(!e.source.id) return;
		win.fireEvent('animateToView', {action: "sessions#show", params: {id : e.source.id}});
	});

	Ti.App.addEventListener("apiUpdateFinish", Controllers.sessions.index.p(refreshTable));

	view.add(tableView);
	win.add(view);
}
