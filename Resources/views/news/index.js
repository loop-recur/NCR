Views.news.index = function(win, posts) {		
	var createTableViewRow = function(post) {
		
		var avatar_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad_avatar_underlay.png",
			height:"66dp",
			width:"63dp",
			left:"3dp",
			bottom:"30dp"
		});
		
		var avatar = Ti.UI.createImageView({
			image: post.profile_image_url,
			height:"50dp",
			width:"50dp",
			bottom:"11dp"
		});
		
		avatar_bg.add(avatar);
		
		var body_bg = Ti.UI.createView({
			backgroundImage:"images/footer/NCR_iPad2_feed_quote_box_left.png",
			height:"90dp",
			width:"250dp",
			left:"68dp",
			bottom:"15dp"
		});
		
		var body = Ti.UI.createLabel({
			text:post.text, 
			font:{fontFamily:'Helvetica',fontSize:"13dp",fontWeight:'regular'},
			color:"#6c7881",
			width:"230dp",
			height:"75dp",
			left:"20dp",
			top:"2dp"
		});
		
		body_bg.add(body);
		
		var time = Ti.UI.createLabel({
			text:Date.parse(post.created_at).toString('M/d/yy h:mm tt'), 
			font:{fontFamily:'Helvetica',fontSize:"12dp",fontWeight:'regular'},
			color:"#6c7881",
			bottom:"3dp",
			left:"3dp",
			height:"auto",
			width:"auto"
		});
			
		var row = Ti.UI.createTableViewRow({
			height:"110dp",
			className:'news'
		});
		
		row.add(avatar_bg);
		row.add(body_bg);
		row.add(time);
		
		return row;
	}
	
	var appendRow = function(post) {
		tableView.appendRow(createTableViewRow(post));
	}
	
	var tableView = Ti.UI.createTableView({
		backgroundColor:"transparent",
		// top:"10dp",
		height:"100%"
	});

	setTimeout(function() {
		map(appendRow, posts);
	}, 500);
	
	
	win.add(tableView);
}
