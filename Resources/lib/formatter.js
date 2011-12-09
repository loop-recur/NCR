Formatter = (function() {
	
var _timeToString = lambda(".toString('yyyy-MM-dd h:mm tt')");
	
var timeSpan = compose(join(" - "), map(_timeToString));

return {timeSpan : timeSpan}

})();
