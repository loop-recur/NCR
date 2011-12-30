Twitter = (function() {

var tweet_count = (Ti.Platform.osname == 'android') ? 10 : 25;
var timeout = 11000;

var request = function(base_url, url, fun) {
	var xhr = new HTTPClientWithCache({baseUrl: base_url, retryCount: 0, cacheSeconds: 120});
  xhr.options.timeout = timeout;
	xhr.options.onload = fun;
  xhr.open("GET", url);
	xhr.send();
}

var search = defn(function(term, cb) {
	var url = '/search.json?q='+term+'&result_type=recent&rpp=' + tweet_count;
	request("http://search.twitter.com", url, compose(cb, parseTweets(true)));
});

var parseTweets = defn(function(is_search, resp) {
	var json = eval('(' + resp.responseText + ')');
	var tweets = is_search ? json.results : json;
	return tweets;
});

var addAvatar = function(tweet) {
	tweet.profile_image_url = tweet.user.profile_image_url;
	return tweet;
}

var timeline = defn(function(name, cb) {
	var url = "/1/statuses/user_timeline.json?screen_name="+name+"&count="+tweet_count;
	request("http://api.twitter.com", url, compose(cb, map(addAvatar), parseTweets(false)));
});
	
return {search : search, timeline: timeline}

})();
