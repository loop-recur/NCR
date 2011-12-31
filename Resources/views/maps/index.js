Views.maps.index = function(win) {
	var options = {skip_back : true};
	
	if(isIPad) options.skip_back = false;
	
	var subtabs = UI.SubTabs(win, Maps, options);
	
	subtabs.delegate = {
		getContent : function(view, e) {
			var scrollview = Ti.UI.createScrollView({
				contentWidth:"auto",
				contentHeight:'auto',
				width:'100%',
				height:'100%',
				showHorizontalScrollIndicator:true,
				showVerticalScrollIndicator:true
			});
			
			var map_image = Ti.UI.createImageView({
				image:'images/maps/'+e.source.id.replace(/\s+/g, '').toLowerCase()+'.png'
			});
			
			scrollview.add(map_image);
			
			map_image.addEventListener('click', function(){
				var win = Ti.UI.createWindow({fullscreen: true});
				win.add(scrollview);
				win.open();
			});
			
			
			view.add(scrollview);
		}
	}
}
