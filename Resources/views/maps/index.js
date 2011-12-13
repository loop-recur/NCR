Views.maps.index = function(win) {
	var maps = ["campus", "parking", "streets"]
	, options = {skip_back : true};
	
	if(isIPad) options.skip_back = false;
	
	var subtabs = UI.SubTabs(win, maps, options);
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var scrollview = Ti.UI.createScrollView({
				contentWidth:"auto",
				contentHeight:'auto',
				showHorizontalScrollIndicator:true,
				showVerticalScrollIndicator:true
			});
			
			scrollview.add(Ti.UI.createImageView({
				image:'images/maps/'+e.source.id+'.png',
				height:'auto',
				width:'auto'
			}));
			
			view.add(scrollview);
		}
	}
}
