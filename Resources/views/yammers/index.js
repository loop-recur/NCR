Views.yammers.index = function(win, yammers) {
	
	var mugshot_url = compose('.mugshot_url', last, '.references')(yammers);
	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createTableViewRow = function(yammer) {
		
		var avatar_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad_avatar_underlay.png",
			height:66,
			width:63,
			left:0,
			bottom:30
		});

		var avatar = Ti.UI.createImageView({
			image: mugshot_url,
			height:50,
			width:50,
			bottom:11
		});
		
		avatar_bg.add(avatar);
		
		var body_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad2_feed_quote_box_left.png",
			height:90,
			width:360,
			right:0,
			bottom:20
		});
		
		var body = Ti.UI.createLabel({
			text:yammer.body.rich, 
			font:{fontFamily:'Helvetica',fontSize:"13dp",fontWeight:'regular'},
			color:"#6c7881",
			width:300,
			left:40,
		});
		
		body_bg.add(body);
		
		var time = Ti.UI.createLabel({
			text:Date.parse(yammer.created_at).toString('M/d/yy h:mm tt'), 
			font:{fontFamily:'Helvetica',fontSize:"12dp",fontWeight:'regular'},
			color:"#6c7881",
			bottom:10,
			left:0,
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:110
		});
		
		row.add(avatar_bg);
		row.add(body_bg);
		row.add(time);
		
		return row;
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, yammers.messages),
		backgroundColor:"transparent",
		width:430,
		left:10, 
		height:180,
		top:10
	});
	
	view.add(tableView);
	win.add(view);
}