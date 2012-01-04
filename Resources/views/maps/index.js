Views.maps.index = function(win) {
	var options = {skip_back : true};
	
	if(isIPad) options.skip_back = false;
	
	var subtabs = UI.SubTabs(win, Maps, options);
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var map_name = e.source.id.replace(/\s+/g, '').toLowerCase();
			
			if(isIPad) {
				var scrollview = Ti.UI.createScrollView({
					contentWidth:"auto",
					contentHeight:'auto',
					width:'100%',
					height:'100%',
					showHorizontalScrollIndicator:true,
					showVerticalScrollIndicator:true
				});
				
				var map_image = Ti.UI.createImageView({
					image:'images/maps/'+map_name+'.png'
				});
				scrollview.add(map_image);
				view.add(scrollview);
			} else {
				var webview = Ti.UI.createWebView({
           scalesPageToFit: true,
           url: "pages/"+map_name+'.html'
        });
				view.add(webview);
			}
		}
	}
}
