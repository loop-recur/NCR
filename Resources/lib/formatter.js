Formatter = (function() {
	
var _timeToString = lambda(".toString('h:mm tt')");
	
var timeSpan = compose(join(" - "), map(_timeToString));

return {timeSpan : timeSpan}

})();
