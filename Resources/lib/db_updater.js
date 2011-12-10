DbUpdater = (function() {
	
function saveToDb(name, json) {
	map(App.db.save(name),  json);
};

function importData(cb) {
	callAndSave('sessions', cb);
	callAndSave('speakers');
}

function callAndSave(name, cb) {
	var Api = RestApi(name);

	Api.all(function(json) {
		saveToDb(name, json);
		if(cb) cb();
	});
}

update = function(cb) {
	App.db.delete_all('sessions');
	App.db.delete_all('speakers', function() {
		importData(cb);
	});
}
	
return {update : update}

})();