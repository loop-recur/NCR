Views.maps.index = function(win) {
	var maps = ["campus", "parking", "streets"]
	, options = {};
	
	if(isIPhone) options.skip_back = true;
	
	var subtabs = UI.SubTabs(win, maps, options);
	
	subtabs.delegate = {
		getContent : function(scrollview, e) {
			scrollview.add(Ti.UI.createImageView({
				image:'images/maps/'+e.source.id+'.png',
				height:'auto',
				width:'auto'
			}));
		}
	}
}
