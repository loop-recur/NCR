DbUpdater = (function() {
	
var tables = keys(Schema);

var _start = fireEvent.curry('apiUpdateStart');

var _finish = fireEvent.curry('apiUpdateFinish');

var _saveToDb = defn(function(table, json) {
	map(App.db.save(table), json);
});

var _deleteTable = defn(function(cb, table) {
	App.db.find(table, {}, ifelse(empty, cb.curry(table), App.db.delete_all.curry(table, cb.curry(table))));
});

var _refreshDb = defn(function(table, json) {
	_deleteTable(map.curry(App.db.save(table), json), table);
});

var _callAndSave = defn(function(table, cb) {
	RestApi(table).all({success: compose(cb, _refreshDb(table)), error : compose(cb, _finish) });
});

var _importData = map_async(_callAndSave, tables);

var _loadFromConfig = function(t) {
	return Config[capitalize(t)];
}

var _loadAndSave = function(table) {
	_saveToDb(table, _loadFromConfig(table));
}

var loadCannedData = compose(_finish, map.curry(_deleteTable(_loadAndSave), tables), _start);

var update = compose(_importData.curry(_finish), _start);

return {update : update, loadCannedData: loadCannedData}

})();
