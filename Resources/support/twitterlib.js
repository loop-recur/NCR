Twitter = (function() {
	
var tweet_count = 50
var timeout = 11000;

var request = function(url, fun) {
	var xhr = Ti.Network.createHTTPClient();
  xhr.timeout = timeout;
	xhr.onload = fun;
  xhr.open("GET", url);
	xhr.send();
}

var search = defn(function(term, cb) {
	var url = 'http://search.twitter.com/search.json?q='+term+'&result_type=recent&rpp=' + tweet_count;
	request(url, compose(cb, parseTweets.p(true)));
});

var parseTweets = function(is_search) {
	var json = eval('(' + this.responseText + ')');
	var tweets = is_search ? json.results : json;
	return tweets;
};

var addAvatar = function(tweet) {
	tweet.profile_image_url = tweet.user.profile_image_url;
	return tweet;
}

var timeline = defn(function(name, cb) {
	var url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+name+"&count='"+tweet_count;
	request(url, compose(cb, map(addAvatar), parseTweets.p(false)));
});
	
return {search : search, timeline: timeline}

})();
