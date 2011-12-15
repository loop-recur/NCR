Views.news.index = function(win, posts) {	
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});
	
	var createTableViewRow = function(post) {
		
		var avatar_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad_avatar_underlay.png",
			height:66,
			width:63,
			left:3,
			bottom:30
		});
		
		var avatar = Ti.UI.createImageView({
			image: post.profile_image_url,
			height:50,
			width:50,
			bottom:11
		});
		
		avatar_bg.add(avatar);
		
		var body_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad2_feed_quote_box_left.png",
			height:90,
			width:250,
			right:2,
			bottom:15
		});
		
		var body = Ti.UI.createLabel({
			text:post.text, 
			font:{fontFamily:'Helvetica',fontSize:"13dp",fontWeight:'regular'},
			color:"#6c7881",
			width:230,
			height:75,
			left:20,
			top:2
		});
		
		body_bg.add(body);
		
		var time = Ti.UI.createLabel({
			text:Date.parse(post.created_at).toString('M/d/yy h:mm tt'), 
			font:{fontFamily:'Helvetica',fontSize:"12dp",fontWeight:'regular'},
			color:"#6c7881",
			bottom:3,
			left:3,
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:110,
			className:'news'
		});
		
		row.add(avatar_bg);
		row.add(body_bg);
		row.add(time);
		
		return row;
	}
	
	var tableView = Ti.UI.createTableView({
		data:map(createTableViewRow, posts),
		backgroundColor:"transparent",
		top:10
	});
	
	view.add(tableView);
	win.add(view);
}
