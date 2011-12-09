Layouts.nav = function() {
	
	var nav_view = Ti.UI.createView({
		backgroundColor:'#E2E2E2',
		top:189,
		height:122
	});

	var schedule_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_schedule_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_schedule_btn_active.png",
		top:23,
		// left:"14%",
		left:20,
		height:83,
		width:228
	});
	
	schedule_button.addEventListener("click", function(){
		Ti.App.fireEvent('swapMain', {action: "sessions#index"});
	});

	nav_view.add(schedule_button);

	var maps_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_events_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_events_btn_active.png",
		top:23,
		// right:"14%",
		right:20,
		height:83,
		width:228
	});

	nav_view.add(maps_button);

	var speakers_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_speakers_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_speakers_btn_active.png",
		top:23,
		height:83,
		width:228
	});

	nav_view.add(speakers_button);
	
	return nav_view;
}
