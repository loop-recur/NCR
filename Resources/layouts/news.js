Layouts.news = function(win) {	
	var mappings = {"#ncr" : 'twitter1_filter', "@ncr" : 'twitter2_filter', "yammer" : 'yammer_filter'}
	
	var subtabs = UI.SubTabs(win, keys(mappings), {skip_back : true, center: true});
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var scrollview = Ti.UI.createScrollView({
				contentWidth:"auto",
				contentHeight:'auto',
				showHorizontalScrollIndicator:false,
				showVerticalScrollIndicator:true
			});
			
			view.add(scrollview);
			
			App.action(scrollview, "news#index", {name : mappings[e.source.id]});
		}
	}
}
