UI.SubTabs = function(win, tab_names, options) {	
	
	var width = Ti.Platform.displayCaps.platformWidth
	, backgroundImage = 'images/buttonbar/button2_selected.png'
	, backgroundSelectedImage = 'images/buttonbar/button2_unselected_shadow.png'
	, object = {}
	, options = options || {};
	
	var view = Ti.UI.createView({
		backgroundImage:"images/iphone/NCR_iPhone_main_bg.png"
	});
	
	var scrollview = Titanium.UI.createView({
		top: 36,
		width:"100%",
		height:'100%'
	});
	
	var tabbedBarView = Ti.UI.createView({
    backgroundColor: 'transparent',
    top: 0,
    height: 36
  });

  var tabbedBar = Ti.UI.createView({
    top: 0,
    backgroundColor: 'transparent',
    height: 36,
    width: width
  });

	if(!options.skip_back) {
		var backButton = Ti.UI.createButton({
			title: "Back",
			width: 50,
			height: 30,
			left: 0
		});

		backButton.addEventListener('click', function(e) {
			win.remove(view);
		});

		tabbedBar.add(backButton);
	}

	
	var createTab = function(tab_name) {
		var index = tab_names.indexOf(tab_name);
		var left = width - ((parseInt(index) + 1) * (width / tab_name.length));
		
		var tab = Ti.UI.createButton({
	      backgroundImage: backgroundImage,
				backgroundSelectedImage: backgroundSelectedImage,
				title: tab_name,
	      height: 36,
				width: (width / tab_name.length),
	      left: left,
	      id: tab_name
	  });
	
		tab.addEventListener('click', function(e) {
			App.removeChildren(scrollview, scrollview.children);
			object.delegate.getContent(scrollview, e);
		});
		
		return tab;
	}
	
	var buttons = map(createTab, tab_names);
	UI.ButtonGroup.apply(UI.ButtonGroup, buttons);
	
	map(function(t){ tabbedBar.add(t) }, buttons);
	
	first(buttons).fireEvent('click', {});
	
	tabbedBarView.add(tabbedBar);
	view.add(tabbedBarView);
	view.add(scrollview);
	win.add(view);
	
	return object;
}