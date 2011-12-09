Helpers.Application = {};

Helpers.Application.isAndroid = function() {
	return Ti.Platform.osname == 'android';
}

Helpers.Application.addDp = function() {
	var _sum = reduce.p('+', 0);
	var _getInts = map.p(Helpers.Application.extractInteger);
	return compose('+"dp"', _sum, _getInts, argsToList)(arguments);
}

Helpers.Application.extractInteger = function(str) {
    var str = new String(str);
    return parseInt(str.replace("dp", ""));
}

function argsToList(a){
	return Array.prototype.slice.call(a);
}
