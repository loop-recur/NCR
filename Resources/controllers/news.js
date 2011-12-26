Controllers.news = (function() {
	
	var _adaptYammer = defn(function(mugshot_url, yammer) {
		yammer.profile_image_url = mugshot_url;
		yammer.text = yammer.body.rich;
		return yammer;
	});
	
	var _adaptYammers = function(yammers) {
		var mugshot_url = compose('.mugshot_url', last, '.references')(yammers);
		return compose(map(_adaptYammer(mugshot_url)), '.messages')(yammers);
	}
	
	var index = function(view, params) {
		if(params.name == "twitter1_filter") return Twitter.search('ncr', view);
		if(params.name == "twitter2_filter") return Twitter.timeline('ncr', view);
		if(params.name == "yammer_filter") return Yammer.messages(compose(view, _adaptYammers));
	};
		
	return {index : index}
})();
