Controllers.sessions = (function() {
	var _name = "sessions";
	
	var index = function(view) {
		App.db.find(_name, {}, view);
	}
		
	return {index : index}
})();
