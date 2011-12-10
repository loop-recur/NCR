// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.include('initializers/init.js');
try { App.run(); } catch(E) { alert("Failed with "+E); }
require('support/date');
require('support/twitterlib');

isAndroid = Helpers.Application.isAndroid();

// App.setHost("http://ncr.herokuapp.com/api");
App.setHost("http://localhost:3000/api");

setupDb(true); // leave true for dev only.
DbUpdater.update(Layouts.application);

function setupDb(redo) {
	App.db = LoopRecur.Db(Titanium.Database, isAndroid);
	App.db.use("ncr");
	
	if(redo) map(App.db.drop, ['sessions', 'speakers']);
	
	App.db.create("sessions", {title:"string", description:"text", start_time:"datetime", end_time:"datetime", speaker_id: "integer", created_at:"datetime", updated_at:"datetime" });
	App.db.create("speakers", {name:"string", company: "string", bio:"text", created_at:"datetime", updated_at:"datetime"});
}
