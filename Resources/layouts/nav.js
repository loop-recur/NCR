Layouts.nav = function() {
	
	var nav_view = Ti.UI.createView({
		backgroundColor:'#e3e3e3ff',
		top:189,
		height:122
	});

	var schedule_button = Ti.UI.createButton({
		top:23,
		left: "14%",
		height:83,
		width:228,
		title: "Schedules"
	});
	
	schedule_button.addEventListener("click", function(){
		Ti.App.fireEvent('swapMain', {action: "sessions#index"});
	});

	nav_view.add(schedule_button);

	var maps_button = Ti.UI.createButton({
		top:23,
		right: "14%",
		height:83,
		width:228,
		title: "Maps"
	});

	nav_view.add(maps_button);

	var speakers_button = Ti.UI.createButton({
		top:23,
		height:83,
		width:228,
		title: "Speakers"
	});

	nav_view.add(speakers_button);
	
	return nav_view;
}
