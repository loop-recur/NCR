Layouts.application = function() {
	var tabGroup = Ti.UI.createTabGroup();
	
	var app_background_image = "images/phones/NCR_iPhone_main_bg.png";
	
	var sessions_win = Ti.UI.createWindow({
			backgroundImage:app_background_image,
			navBarHidden:true
	});
	
	sessions_win.addEventListener('open', App.action.p(sessions_win, "sessions#index"));
	
	sessions_tab = Ti.UI.createTab({
	    title:'Schedule',
	    window:sessions_win,
			icon:'images/phones/NCR_iPhone_tabbar_schedule_icon.png'
	});
	
	var speakers_win = Ti.UI.createWindow({
			backgroundImage:app_background_image,
			navBarHidden:true
	});
	
	speakers_win.addEventListener('open', App.action.p(speakers_win, "speakers#index"));
	
	speakers_tab = Ti.UI.createTab({
	    title:'Speakers',
	    window:speakers_win,
			icon:'images/phones/NCR_iPhone_tabbar_speakers_icon.png'
	});
	
	var maps_win = Ti.UI.createWindow({
			backgroundImage:app_background_image,
			navBarHidden:true
	});
	
	maps_win.addEventListener('open', Views.maps.index.p(maps_win));
	
	maps_tab = Ti.UI.createTab({
	    title:'Event Maps',
	    window:maps_win,
			icon:'images/phones/NCR_iPhone_tabbar_events_icon.png'
	});
	
	var news_win = Ti.UI.createWindow({
			backgroundImage:app_background_image,
			navBarHidden:true
	});
	
	news_win.addEventListener('open', Layouts.news.p(news_win));
	
	news_tab = Ti.UI.createTab({
	    title:'News',
	    window:news_win,
			icon:'images/phones/NCR_iPhone_tabbar_newsfeed_icon.png'
	});
	
	map(function(t){ tabGroup.addTab(t) }, [sessions_tab, speakers_tab, maps_tab, news_tab]);	
	
	map(function(o) {
		o.win.addEventListener('animateToView', App.animateToView(o.tab));
	}, [{win : sessions_win, tab: sessions_tab}, {win: speakers_win, tab: speakers_tab}]);
	
	
	tabGroup.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
}
