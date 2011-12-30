Views.speakers.index = function(win, speakers) {		
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});

	var createHeaderRow = function(letter) {
		var name = Ti.UI.createLabel({
			text:letter, 
			font:{fontFamily:'HelveticaNeue-Bold',fontSize:"20dp"},
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
	
	var createTableViewRow = function(speaker) {				
		var name = Ti.UI.createLabel({
			text:speaker.name, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:"10dp",
			height:"auto",
			width:"auto",
			id: speaker.id
		});
			
		var row = Ti.UI.createTableViewRow({
			height:"50dp",
			id: speaker.id
		});
		
		row.add(name);
		
		return row;
	}
	
	var createGroupedRow = function(letter, speakers) {
		return flatten([createHeaderRow(letter), map(createTableViewRow, speakers)]);
	}
	
	var tableView = Ti.UI.createTableView({
		backgroundColor:'transparent'
	});
	
	var appendRow = function(row) {
		tableView.appendRow(row);
	}
	
	var createData = compose(map(appendRow), flatten, omap(createGroupedRow));
	createData(speakers);
	
	var refreshTable = function(speakers) {
		tableView.setData([]);
		createData(speakers);
	}
	
	if(!isIPad) {
		tableView.addEventListener('click', function(e) {
			if(!e.source.id) return;
			win.fireEvent('animateToView', {action: "speakers#show", params: {id : e.source.id}});
		});
		
		Ti.App.addEventListener("apiUpdateFinish", Controllers.speakers.index.p(refreshTable));
	}
	
	view.add(tableView);
	win.add(view);
}
