Controllers.sessions = (function() {
	var _name = "sessions";
	
	var index = function(view, params) {
		var query = {};
		
		if(params.speaker_id) query = {speaker_id : params.speaker_id};
		App.db.find(_name, query, {order_by: "date DESC, start_time ASC"}, compose(view.p(params), groupBy(compose('.toString("dddd")', '.date'))));
	}
	
	var show = function(view, params) {
		App.db.find(_name, {id: params.id}, compose(view, first));
	}
		
	return {index : index, show : show}
})();
