Ti.include('initializers/init.js');
App.run();

isAndroid = Ti.Platform.osname == 'android';
isIPad = Ti.Platform.osname == 'ipad';
isIPhone = Ti.Platform.osname == 'iphone';

Ti.include('/support/date.js', 'support/oauth.js', 'support/sha1.js', '/support/twitterlib.js', '/support/yammer.js');

Yammer.config({
	oauth_consumer_key: "yvBd07vZX7562qlAohvPQ",
	consumer_secret: "wnLmij59ByH4XQvd4eyuiKgatrr40MLKdKwE9iXy0",
	access_token: "rSH7BhKDmiu4jGSR5VUjg",
	access_token_secret: "sQfypTH3KxbAMR5y1pf1SpOmtyMiDjZQrY1VxxXI0Y"
});

App.setHost("http://ncr.herokuapp.com/api");

App.db = LoopRecur.Db(Ti.Database, isAndroid);
App.db.use("ncr");

SchemaLoad.createDb({redo : false});

Layouts[Ti.Platform.osname].application ? Layouts[Ti.Platform.osname].application() : Layouts.application();

App.db.find("sessions", {}, when(empty, DbUpdater.loadCannedData));
