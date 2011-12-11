Views.speakers.index = function(win, speakers) {	
	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});

	
	var createHeaderRow = function(letter) {
		var name = Titanium.UI.createLabel({
			text:letter, 
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
	
	var createTableViewRow = function(speaker) {				
		var name = Titanium.UI.createLabel({
			text:speaker.name, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:10,
			top:20,
			height:"auto",
			width:"auto"
		});
			
		var bio = Titanium.UI.createLabel({
			text:speaker.bio, 
			font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
			color:"#333333",
			left:35,
			top:35,
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:80
		});
		
		row.add(name);
		row.add(bio);
		
		return row;
	}
	
	var createGroupedRow = function(letter, speakers) {
		return flatten([createHeaderRow(letter), map(createTableViewRow, speakers)]);
	}
	
	var data = compose(flatten, omap(createGroupedRow))(speakers);

	var tableView = Ti.UI.createTableView({
		data:data,
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}
