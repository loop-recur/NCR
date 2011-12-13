Views.speakers.show = function(win, speaker) {	
	var view = Ti.UI.createView({
		backgroundColor: "white"
	});
	
	var name = Ti.UI.createLabel({
		text:speaker.name, 
		font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
		color:"#444444",
		left:10,
		top:20,
		height:"auto",
		width:"auto"
	});
		
	var bio = Ti.UI.createLabel({
		text:speaker.bio, 
		font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
		color:"#333333",
		left:35,
		top:35,
		height:"auto",
		width:"auto"
	});
	
	App.action(view, "sessions#index", {speaker_id: speaker.id});
	
	view.add(name);
	view.add(bio);
	
	win.add(view);
}
