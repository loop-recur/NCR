Controllers.sessions = (function() {
	var _name = "sessions";
	
	var index = function(view) {
		var _setDate = set('date', compose(Date.parse, '.start_time'));
		App.db.find(_name, {}, compose(view, groupBy(compose('.toString("yy-mm-dd")', log, '.date')), reverse, sortBy('.date'), map(_setDate)));
	}
		
	return {index : index}
})();
