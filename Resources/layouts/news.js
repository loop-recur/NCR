Layouts.news = function(win) {	
	var mappings = {"#ncr" : 'twitter1_filter', "@ncr" : 'twitter2_filter', "yammer" : 'yammer_filter'}
	
	var subtabs = UI.SubTabs(win, keys(mappings), {skip_back : true});
	
	subtabs.delegate = {
		getContent : function(scrollview, e) {
			App.action(scrollview, "news#index", {name : mappings[e.source.id]});
		}
	}
}
