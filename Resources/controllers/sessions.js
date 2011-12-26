Controllers.sessions = (function() {
	var _name = "sessions";
	
	var _setDate = function(d) {
		return set('date', compose(Date.parse, '.start_time'))(d);
	}
	
	var index = function(view, params) {
		var query = {};
		
		if(params.speaker_id) query = {speaker_id : params.speaker_id};
		App.db.find(_name, query, compose(view.p(params), groupBy(compose('.toString("dddd")', '.date')), reverse, sortBy('.date'), map(_setDate)));
	}
	
	var show = function(view, params) {
		App.db.find(_name, {id: params.id}, compose(view, _setDate, first));
	}
		
	return {index : index, show : show}
})();
