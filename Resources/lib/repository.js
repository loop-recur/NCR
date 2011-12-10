Repository = (function() {
	Cache = {};
	
	get = function(name) {
		return Cache[name];
	}
	
	set = function(name, records) {
		Cache[name] = records;
	}
	
	find = function(name, id) {
		return select("id == x.id".lambda().p(id), Cache[name])[0];
	}
	
	return { get : get, set : set, find : find }
})();
