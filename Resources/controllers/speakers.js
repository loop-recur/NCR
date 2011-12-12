Controllers.speakers = (function() {
	var _name = "speakers";
	
	var index = function(view) {
		var _lastName = compose(last, split(" "), '.name');
		App.db.find(_name, {}, compose(view, groupBy(compose(first, Formatter.titleize, _lastName))));
	};
	
	var show = function(view, params) {
		App.db.find(_name, {id: params.id}, compose(view, first));
	}
	
	return {index : index, show : show}
})();
