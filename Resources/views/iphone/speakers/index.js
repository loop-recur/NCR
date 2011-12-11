Views.iphone.speakers.index = function(win, speakers) {
	log("SPEAKERS");
	log(speakers);
	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createGroupedRow = function(letter, speakers) {
		log("letter");
		log(letter);
		log("speakers");
		log(speakers);
		map(createTableViewRow, speakers);
	}
	
	var createTableViewRow = function(x) {				
		var name = Titanium.UI.createLabel({
			text:x.name, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:10,
			top:20,
			height:"auto",
			width:"auto"
		});
			
		var bio = Titanium.UI.createLabel({
			text:x.bio, 
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
	
	var tableView = Ti.UI.createTableView({
		data:omap(createGroupedRow, speakers),
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}