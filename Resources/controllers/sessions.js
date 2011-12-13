Controllers.sessions = (function() {
	var _name = "sessions";
	
	var index = function(view, params) {
		var _setDate = set('date', compose(Date.parse, '.start_time'))
		, query = {};
		
		if(params.speaker_id) query = {speaker_id : params.speaker_id};
		App.db.find(_name, query, compose(view.p(params), groupBy(compose('.toString("M/d/yy")', '.date')), reverse, sortBy('.date'), map(_setDate)));
	}
	
	var show = function(view, params) {
		App.db.find(_name, {id: params.id}, compose(view, first));
	}
		
	return {index : index, show : show}
})();
