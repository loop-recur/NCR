Views.maps.index = function(win) {
	var options = {skip_back : true};
	
	if(isIPad) options.skip_back = false;
	
	var subtabs = UI.SubTabs(win, Maps, options);
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var scrollview = Ti.UI.createScrollView({
				contentWidth:"auto",
				contentHeight:'auto',
				showHorizontalScrollIndicator:true,
				showVerticalScrollIndicator:true
			});
			
			scrollview.add(Ti.UI.createImageView({
				image:'images/maps/'+e.source.id.replace(/\s+/g, '').toLowerCase()+'.png',
				height:'auto',
				width:'auto'
			}));
			
			view.add(scrollview);
		}
	}
}
