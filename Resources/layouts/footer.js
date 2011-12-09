Layouts.footer = function() {
	
	var footer_container = Ti.UI.createView({
		backgroundColor:'#ff6c26ff',
		height:220,
		bottom:0
	});

	var news_bar = Ti.UI.createView({
		backgroundColor:'#00ff00ff',
		bottom:0,
		height:40
	});

	footer_container.add(news_bar);

	var news_area = Ti.UI.createView({
		backgroundColor:'#aaaaaaff',
		top:48,
		height:172
	});

	var twitter1_filter = Ti.UI.createButton({
		top:29,
		right: "14%",
		height:36,
		width:145,
		title: "Twitter1"
	});

	news_area.add(twitter1_filter);

	var twitter2_filter = Ti.UI.createButton({
		top:73,
		right: "14%",
		height:36,
		width:145,
		title: "Twitter2"
	});

	news_area.add(twitter2_filter);

	var yammer_filter = Ti.UI.createButton({
		top:116,
		right: "14%",
		height:36,
		width:145,
		title: "Yammer"
	});

	news_area.add(yammer_filter);

	footer_container.add(news_area);
	
	return footer_container;
}
