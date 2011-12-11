Layouts.iphone = function() {
	var tabGroup = Ti.UI.createTabGroup();
	
	var sessions_win = Ti.UI.createWindow({
			backgroundImage:'images/NCR_iPad2_main_bg.png',
			navBarHidden:true
	});
	
	sessions_win.addEventListener('open', App.action.p(sessions_win, "sessions#index"));
	
	sessions_tab = Ti.UI.createTab({
	    title:'Schedule',
	    window:sessions_win
	});
	
	var speakers_win = Ti.UI.createWindow({
			backgroundImage:'images/NCR_iPad2_main_bg.png',
			navBarHidden:true
	});
	
	speakers_win.addEventListener('open', App.action.p(speakers_win, "speakers#index"));
	
	speakers_tab = Ti.UI.createTab({
	    title:'Speakers',
	    window:speakers_win
	});
	
	var maps_win = Ti.UI.createWindow({
			backgroundImage:'images/NCR_iPad2_main_bg.png',
			navBarHidden:true
	});
	
	maps_win.addEventListener('open', App.action.p(maps_win, "maps#index"));
	
	maps_tab = Ti.UI.createTab({
	    title:'Event Maps',
	    window:maps_win
	});
	
	var news_win = Ti.UI.createWindow({
			backgroundImage:'images/NCR_iPad2_main_bg.png',
			navBarHidden:true
	});
	
	news_win.addEventListener('open', App.action.p(news_win, "tweets#index"));
	
	news_tab = Ti.UI.createTab({
	    title:'News',
	    window:news_win
	});
	
	map(function(t){ tabGroup.addTab(t) }, [sessions_tab, speakers_tab, maps_tab, news_tab]);	
	
	tabGroup.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
}
