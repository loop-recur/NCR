Views.maps.index = function(win) {	
	var maps = ["campus", "parking", "streets"];
	var width = Ti.Platform.displayCaps.platformWidth;
	var backgroundImage = 'images/buttonbar/button2_selected.png';
	var backgroundSelectedImage = 'images/buttonbar/button2_unselected_shadow.png';
	
	var view = Ti.UI.createView({
		backgroundColor: "black"
	});
	
	var scrollview = Titanium.UI.createScrollView({
		top: 36,
		contentWidth:"auto",
		contentHeight:'auto',
		showHorizontalScrollIndicator:false,
		showVerticalScrollIndicator:true
	});
	
	var tabbedBarView = Ti.UI.createView({
      backgroundColor: '#555',
      top: 0,
      height: 36
  });

  var tabbedBar = Ti.UI.createView({
      top: 0,
      backgroundColor: '#000',
      height: 36,
      width: width
  });

	var backButton = Ti.UI.createButton({
		title: "Back",
		width: 50,
		height: 30,
		left: 0
	});
	
	backButton.addEventListener('click', function(e) {
		win.remove(view);
	});

	var getMap = function(name) {
		return Ti.UI.createImageView({
			image:'images/maps/'+name+'.png',
			height:'auto',
			width:'auto'
		});
	}
	
	var swapView = function(view) {
		if(scrollview.children) scrollview.remove(first(scrollview.children));
		scrollview.add(view);
	}

	var createTab = function(map) {
		var index = maps.indexOf(map);
		var left = width - ((parseInt(index) + 1) * (width / map.length));
		
		var tab = Ti.UI.createButton({
	      backgroundImage: backgroundImage,
				backgroundSelectedImage: backgroundSelectedImage,
				title: map,
	      height: 36,
				width: (width / map.length),
	      left: left,
	      id: map
	  });
	
		tab.addEventListener('click', function(e){ 
			swapView(getMap(e.source.id));
		});
		
		return tab;
	}
	
	var buttons = map(createTab, maps);
	UI.ButtonGroup.apply(UI.ButtonGroup, buttons);
	map(function(t){ tabbedBar.add(t) }, buttons);
	
	first(buttons).fireEvent('click', {});
	
	tabbedBar.add(backButton);
	tabbedBarView.add(tabbedBar);
	view.add(tabbedBarView);
	view.add(scrollview);
	win.add(view);
}
