Controllers.speakers = (function() {
	var _name = "speakers";
	
	var index = function(view) {
		App.db.find(_name, {}, view);
	};
		
	return {index : index}
})();
