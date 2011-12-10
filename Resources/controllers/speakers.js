Controllers.speakers = (function() {
	
	var index = function(view) {
		compose(view, uniqBy('.id'), map('.speaker'), filter('.speaker'), Repository.get)("sessions");
	};
		
	return {index : index}
})();
