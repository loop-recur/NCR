Formatter = (function() {
	
var _timeToString = lambda(".toString('h:mm tt')");
	
var timeSpan = compose(join(" - "), map(_timeToString));

var _firstToUpper = function(head, tail) {
	return head.toUpperCase() + tail;
}

var _capitolize = headTail(_firstToUpper);

var titleize = compose(unwords, map(_capitolize), words);

return {timeSpan : timeSpan, titleize: titleize}

})();
