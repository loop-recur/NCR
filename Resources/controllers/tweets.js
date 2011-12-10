Controllers.tweets = (function() {
	
	var index = function(view, params) {
		var fun = (params.name == "twitter1_filter") ? Twitter.search('codestrong') : Twitter.timeline('codestrong');
		fun(view);
	};
		
	return {index : index}
})();
