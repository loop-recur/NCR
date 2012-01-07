SchemaLoad = (function() {
	
var createDb = function(config) {
	if(config.redo) map(App.db.drop, keys(Schema));
	
	try {
		makeTables();
	} catch(e) {
		map(App.db.drop, keys(Schema));
		makeTables();
	}
}

var makeTables = function() {
	for(table in Schema) App.db.create(table, Schema[table]);	
}

return {createDb : createDb}	

})();
