Layouts.footer = function() {
	
	var footer_container = Ti.UI.createView({
		height:220,
		bottom:0,
	});

	var news_bar = Ti.UI.createView({
		backgroundImage:"images/footer/NCR_iPad_newsfeed_bar.png",
		top:0,
		left:0,
		right:0,
		height:40
	});

	footer_container.add(news_bar);

	var news_area = Ti.UI.createView({
		backgroundImage:"images/footer/NCR_iPad_newsfeed_bg.png",
		bottom:0,
		height:182
	});

	var twitter1_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_NCRCorp_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_NCRCorp_tag_btn_active.png",
		top:29,
		right: "5%",
		height:36,
		width:145
	});

	news_area.add(twitter1_filter);

	var twitter2_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_breakthrough_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_breakthrough_tag_btn_active.png",
		top:73,
		right: "5%",
		height:36,
		width:145
	});

	news_area.add(twitter2_filter);

	var yammer_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_yammer_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_yammer_tag_btn_active.png",
		top:116,
		right: "5%",
		height:36,
		width:145
	});

	news_area.add(yammer_filter);

	footer_container.add(news_area);
	
	return footer_container;
}
