Layouts.ipad.footer = function() {
	
	var footer_container = Ti.UI.createView({
		height:220,
		bottom:0
	});

	var news_bar = Ti.UI.createView({
		backgroundImage:"images/footer/NCR_iPad_newsfeed_bar_empty.png",
		top:0,
		left:0,
		right:0,
		height:40
	});
	
	var news_feed_label = Ti.UI.createView({
		backgroundImage:"images/footer/NCR_iPad2_news_feed_headeronly.png",
		left:10,
		width:107,
		height:27
	});
		
	news_bar.addEventListener('click', function(){
		if (footer_container.height == 600) {
			footer_container.animate({height:220, duration:500});
			news_area.animate({height:200, duration:700});
			news_area.animate({top:30, duration:700});			
			// footer_container.height = 220;
			// I think it's not doing the toggle b/c it's not actually setting the height after the animation. 
			// Also, for whatever reason, it's making the news_area larger, but the table row isn't following the height change.
		} else {
			footer_container.animate({height:600, duration:500});
			news_area.animate({height:500, duration:700});
			news_area.animate({top:40, duration:700});
			// footer_container.height = 600;
		};
		
	});
		
	var news_area = Ti.UI.createView({
		width:430,
		height:200,
		top: 40,
		left:50
	});

	var button_area = Ti.UI.createView({
		backgroundImage:"images/footer/NCR_iPad_newsfeed_bg.png",
		bottom:0,
		top:40
	});

	var twitter1_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_NCRCorp_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_NCRCorp_tag_btn_active.png",
		top:29,
		right: "5%",
		height:36,
		width:145,
		id: 'twitter1'
	});

	var twitter2_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_breakthrough_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_breakthrough_tag_btn_active.png",
		top:73,
		right: "5%",
		height:36,
		width:145,
		id: 'twitter2'
	});

	var yammer_filter = Ti.UI.createButton({
		backgroundImage:"images/footer/NCR_iPad_yammer_tag_btn_inactive.png",
		backgroundSelectedImage:"images/footer/NCR_iPad_yammer_tag_btn_active.png",
		top:116,
		right: "5%",
		height:36,
		width:145,
		id: 'yammer'
	});
	
	UI.ButtonGroup(twitter1_filter, twitter2_filter, yammer_filter);
	
	twitter1_filter.addEventListener('click', App.swapView(news_area, "news#index", {name : 'twitter1_filter'}));
	twitter2_filter.addEventListener('click', App.swapView(news_area, "news#index", {name : 'twitter2_filter'}));
	yammer_filter.addEventListener('click', App.swapView(news_area, "news#index", {name : 'yammer_filter'}));
	
	footer_container.add(news_bar);
	news_bar.add(news_feed_label);
	
	button_area.add(twitter1_filter);
	button_area.add(twitter2_filter);
	button_area.add(yammer_filter);

	footer_container.add(button_area);
	footer_container.add(news_area);
	
	twitter1_filter.fireEvent('click', {});
	
	return footer_container;
}
