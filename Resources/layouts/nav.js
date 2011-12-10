Layouts.nav = function(main_content) {
	
	var nav_view = Ti.UI.createView({
		backgroundImage:"images/nav/NCR_iPad2_button_row_bg.png",
		top:189,
		height:122,
		left:0,
		right:0
	});

	var schedules_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_schedule_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_schedule_btn_active.png",
		top:23,
		left:24,
		height:83,
		width:228,
		id: 'schedules'
	});

	var maps_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_events_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_events_btn_active.png",
		top:23,
		right:24,
		height:83,
		width:228,
		id: 'maps'
	});
	
	var speakers_button = Ti.UI.createButton({
		backgroundImage:"images/nav/NCR_iPad_speakers_btn_inactive.png",
		backgroundSelectedImage:"images/nav/NCR_iPad_speakers_btn_active.png",
		top:23,
		height:83,
		width:228,
		id: 'speakers'
	});

	
	UI.ButtonGroup(maps_button, speakers_button, schedules_button);		
	
	schedules_button.addEventListener('click', App.swapView(main_content, "sessions#index"));
	speakers_button.addEventListener('click', App.swapView(main_content, "speakers#index"));

	nav_view.add(schedules_button);
	nav_view.add(maps_button);
	nav_view.add(speakers_button);
	
	schedules_button.fireEvent('click', {});
		
	return nav_view;
}
