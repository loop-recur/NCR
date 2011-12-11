Views.yammers.index = function(win, yammers) {
	
	var mugshot_url = compose('.mugshot_url', last, '.references')(yammers);
	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createTableViewRow = function(yammer) {
		var avatar = Titanium.UI.createImageView({
			image: mugshot_url,
			left:10,
			top:20,
			height:40,
			width:40
		});
			
		var body = Titanium.UI.createLabel({
			text:yammer.body.rich, 
			font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
			color:"#333333",
			left:35,
			top:35,
			height:"auto",
			width:"auto"
		});
		
		var time = Titanium.UI.createLabel({
			text:Date.parse(yammer.created_at).toString('dd/mm/yy h:mm tt'), 
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
		
		row.add(avatar);
		row.add(body);
		row.add(time);
		
		return row;
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, yammers.messages),
		backgroundColor:"transparent"
	});
	
	view.add(tableView);
	win.add(view);
}