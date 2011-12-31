Views.maps.index = function(win) {
	var options = {skip_back : true};
	
	if(isIPad) options.skip_back = false;
	
	var subtabs = UI.SubTabs(win, Maps, options);
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var map_name = e.source.id.replace(/\s+/g, '').toLowerCase();
			
			var map_image = Ti.UI.createImageView({
				image:'images/maps/'+map_name+'.png'
			});
			
			var makeView = function() {
				var scrollview = Ti.UI.createScrollView({
					contentWidth:"auto",
					contentHeight:'auto',
					width:'100%',
					height:'100%',
					showHorizontalScrollIndicator:true,
					showVerticalScrollIndicator:true
				});
				
				scrollview.add(map_image);
				
				return scrollview;
			}
			
			if(!isIPad) {
				map_image.addEventListener('click', function(){
					var win = Ti.UI.createWindow({fullscreen: true});

					var webview = Ti.UI.createWebView({
	           scalesPageToFit: true,
	           url: "pages/"+map_name+'.html'
	        });
					win.add(webview);
					win.open();
				});
			}
			
			view.add(makeView());
		}
	}
}
