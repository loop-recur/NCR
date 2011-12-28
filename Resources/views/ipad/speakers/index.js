Views.ipad.speakers.index = function(win, speakers) {		
	var view = Ti.UI.createView({
		backgroundColor: "transparent"
	});

	var createHeaderRow = function(letter) {
		var name = Ti.UI.createLabel({
			text:letter, 
			font:{fontFamily:'HelveticaNeue-Bold',fontSize:"20dp"},
			color:"white",
			left:10,
			height:40,
			width:"100%"
		});
		
		var row = Ti.UI.createTableViewRow({
			height:40,
			opacity:0.75,
			backgroundGradient:{
				type:'linear',
				colors:['#666666','#000001'],
				backFillStart:false
			}
		});
		
		row.add(name);
		return row;
	}
	
	var createTableViewRow = function(speaker) {
		var name = Ti.UI.createLabel({
			text:speaker.name, 
			font:{fontFamily:'GillSans',fontSize:"18dp",fontWeight:'regular'},
			color:"#444444",
			left:10,
			top:20,
			height:"auto",
			width:"auto",
			id: speaker.id
		});
			
		var bio = Ti.UI.createLabel({
			text:speaker.bio, 
			font:{fontFamily:'GillSans-Light',fontSize:"18dp",fontWeight:'regular'},
			color:"#333333",
			left:35,
			top:35,
			height:"auto",
			width:"auto",
			id: speaker.id
		});
			
		var row = Ti.UI.createTableViewRow({
			height:80,
			id: speaker.id
		});
		
		var addSession = function(state, session) {
			var title = Ti.UI.createLabel({
				text:session.title, 
				color:"black",
				height: 30,
				left: 10,
				top: 20 + (state.count * 30)
			});
			
			row.height += (state.count * 15);
			row.add(title);
			return {count : state.count + 1 }
		}
		
		var addSessions = reduce(addSession, {count : 1});
		
		App.db.find('sessions', {speaker_id: speaker.id}, addSessions);
		
		row.add(name);
		row.add(bio);
		
		return row;
	}
	
	var createGroupedRow = function(letter, speakers) {
		return flatten([createHeaderRow(letter), map(createTableViewRow, speakers)]);
	}
	
	var createData = compose(flatten, omap(createGroupedRow));
	
	var tableView = Ti.UI.createTableView({
		data:createData(speakers),
		backgroundColor:"transparent"
	});
	
	var refreshTable = function(speakers) {
		tableView.setData(createData(speakers));
	}
	
	if(!isIPad) {
		tableView.addEventListener('click', function(e) {
			if(!e.source.id) return;
			win.fireEvent('animateToView', {action: "speakers#show", params: {id : e.source.id}});
		});
		
		Ti.App.addEventListener("apiUpdateFinish", Controllers.speakers.index.p(refreshTable));
	}
	
	view.add(tableView);
	win.add(view);
}
