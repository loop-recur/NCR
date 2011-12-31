Layouts.news = function(win) {	
	var mappings = {"#ncr" : 'twitter1_filter', "@ncr" : 'twitter2_filter', "yammer" : 'yammer_filter'}
	
	var subtabs = UI.SubTabs(win, keys(mappings), {skip_back : true, center: true});
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var spinner = Ti.UI.createActivityIndicator({
				style:Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
				height:30,
				width:30
			});

			view.add(spinner);
			spinner.show();
			
			Ti.App.addEventListener('hide_activity_indicator', function(e) {
				spinner.hide();
				view.remove(spinner);
			});
			
			App.action(view, "news#index", {name : mappings[e.source.id]});
		}
	}
}
