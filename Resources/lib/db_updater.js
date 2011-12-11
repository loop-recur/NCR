DbUpdater = (function() {
	
var tables = keys(Schema);

var _start = fireEvent.curry('apiUpdateStart');

var _finish = fireEvent.curry('apiUpdateFinish');

var _saveToDb = defn(function(name, json) {
	map(App.db.save(name),  json);
});

var _callAndSave = function(name, cb) {
	RestApi(name).all(compose(cb, _saveToDb(name)));
}

var _importData = map_async(_callAndSave, tables);

var _loadFromConfig = function(t) {
	return Config[capitalize(t)];
}

var _deleteAndRefreshDb = function(tables) {
	compose(_importData.curry(_finish), _start, map(App.db.delete_all))(tables);
}

var _loadAndSave = function(name) {
	log("LOAIDNG AND SAVING "+name);
	_saveToDb(name, _loadFromConfig(name));
}

var loadCannedData = compose(_finish, map.curry(_loadAndSave, tables), _start);

var update = _deleteAndRefreshDb.curry(tables);

return {update : update, loadCannedData: loadCannedData}

})();
