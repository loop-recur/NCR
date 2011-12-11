Controllers.yammers = (function() {
	
	var index = function(view){
		Yammer.messages(view);
	};
			
	return {index : index}
})();
