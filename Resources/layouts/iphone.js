Layouts.iphone = function() {
	var tabGroup = Ti.UI.createTabGroup();
	
	var sessions_win = Ti.UI.createWindow({
			title:"Schedule"
	});
	
	sessions_win.addEventListener('open', App.action.p(sessions_win, "sessions#index"));
	
	sessions_tab = Ti.UI.createTab({
	    title:'Schedule',
	    window:sessions_win
	});
	
	var speakers_win = Ti.UI.createWindow({
			title:"Speakers"
	});
	
	speakers_win.addEventListener('open', App.action.p(sessions_win, "speakers#index"));
	
	speakers_tab = Ti.UI.createTab({
	    title:'Speakers',
	    window:speakers_win
	});
	
	var maps_win = Ti.UI.createWindow({
			title:"Event Maps"
	});
	
	maps_win.addEventListener('open', App.action.p(sessions_win, "maps#index"));
	
	maps_tab = Ti.UI.createTab({
	    title:'Event Maps',
	    window:maps_win
	});
	
	var news_win = Ti.UI.createWindow({
			title:"news"
	});
	
	news_win.addEventListener('open', App.action.p(sessions_win, "tweets#index"));
	
	news_tab = Ti.UI.createTab({
	    title:'News',
	    window:news_win
	});
	
	map(function(t){ tabGroup.addTab(t) }, [sessions_tab, speakers_tab, maps_tab, news_tab]);	
	
	tabGroup.open();
}
