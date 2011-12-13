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
		
		var addSessions = function(sessions) {
			reduce(addSession, {index : 20}, sessions);
		}
		
		var addSession = function(state, session) {
			var padding = 100;
			
			var title = Ti.UI.createLabel({
				text:session.title, 
				font:{fontFamily:'HelveticaNeue-Bold',fontSize:"20dp"},
				color:"black",
				top: 45,
				left:state.index
			});

			row.add(title);
			return {index : state.index + padding + (session.title.length * 2) }
		}
		
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
