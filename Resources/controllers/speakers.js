Controllers.speakers = (function() {
	var _name = "speakers";
	
	var index = function(view) {
		var _lastName = compose(idx(1), split(" "), '.name');
		var _firstLetter = compose('.toUpperCase()', idx(0));

		App.db.find(_name, {}, compose(view, groupBy(compose(_firstLetter, _lastName))));
	};
	
	return {index : index}
})();
