// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.include('initializers/init.js');
App.run();

Ti.include('/support/date.js');
require('support/twitterlib');
require('support/yammer');

Yammer.config({
	oauth_consumer_key: "lvms8bxKTfLEIqnLHe3p0A",
	consumer_secret: "LfpNjLCCMFVtknjUwIoWGP8KNyocGO01zGll8800",
	access_token: "06nSMwqshlY70uIpjGQ",
	access_token_secret: "2NTqBLB456k9oWoYy7Rfn9RuGIidRYl7o8UdU0oar4"
});

isAndroid = Ti.Platform.osname == 'android';
isIPad = Ti.Platform.osname == 'ipad';
isIPhone = Ti.Platform.osname == 'iphone';

App.setHost("http://ncr.herokuapp.com/api");

App.db = LoopRecur.Db(Ti.Database, isAndroid);
App.db.use("ncr");

SchemaLoad.createDb({redo : false});

Layouts[Ti.Platform.osname].application ? Layouts[Ti.Platform.osname].application() : Layouts.application();

App.db.find("sessions", {}, when(empty, DbUpdater.loadCannedData));

DbUpdater.update();
