Views.yammers.index = function(win, yammers) {
	
	var mugshot_url = compose('.mugshot_url', last, '.references')(yammers);
	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createTableViewRow = function(yammer) {
		
		var avatar_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad_avatar_underlay.png",
			height:"66dp",
			width:"63dp",
			left:0,
			bottom:"30dp"
		});

		var avatar = Ti.UI.createImageView({
			image: mugshot_url,
			height:"50dp",
			width:"50dp",
			bottom:"11dp"
		});
		
		avatar_bg.add(avatar);
		
		var body_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad2_feed_quote_box_left.png",
			height:"90dp",
			width:"360dp",
			right:0,
			bottom:"20dp"
		});
		
		var body = Ti.UI.createLabel({
			text:yammer.body.rich, 
			font:{fontFamily:'Helvetica',fontSize:"13dp",fontWeight:'regular'},
			color:"#6c7881",
			width:"300dp",
			left:"40dp",
		});
		
		body_bg.add(body);
		
		var time = Ti.UI.createLabel({
			text:Date.parse(yammer.created_at).toString('M/d/yy h:mm tt'), 
			font:{fontFamily:'Helvetica',fontSize:"12dp",fontWeight:'regular'},
			color:"#6c7881",
			bottom:"10dp",
			left:0,
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:"110dp"
		});
		
		row.add(avatar_bg);
		row.add(body_bg);
		row.add(time);
		
		return row;
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, yammers.messages),
		backgroundColor:"transparent",
		width:"430dp",
		left:"10dp", 
		height:"180dp",
		top:"10dp"
	});
	
	view.add(tableView);
	win.add(view);
}