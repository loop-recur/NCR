when = function(arg,f){
	var bool = (typeof arg == "boolean") ? arg : arg();
	
	return function() {
		if(bool) f.apply(this, arguments);
	}
}

take = function(n, xs) {
	var result = [];
	
	for(var i=0;i<xs.length;i++ ) {
		if(xs[i] != null) result.push(xs[i]);
		if(result.length>=n) break;
	};
	return result;
}

drop = function(n, xs) {
	xs.splice(0, n);
	return xs;
}

nTimes = function(times, fun) {
	var result = [];
	for(var i=0;i<times;i++ ){ result = cons(fun(), result); }
	return result;
}

log = function(s) {
	Ti.API.info(s);
	return s;
}

apply = function(f, args) {
	return f.apply(f, args);
}

unshift = defn(function(xs, other) {
	return other.concat(xs);
})

cons = defn(function(xs, other) {
	return [xs].concat(other);
});

repeat = function(arg, n) {	
	return nTimes(n, id.curry(arg));
}

index = function(i, xs) {
	return xs[i];
};

first = function(xs) {
	return xs[0];
};

random = function(i) {
	return Math.floor(Math.random()*i);
}

groups_of = function(n, xs) {
	if(xs.length === 0) return [];
	return cons(take(n, xs), groups_of(n, drop(n,xs)));
}

strip = function(str) {
	return str.replace(/\s+/, "");
}

split = defn(function(token, xs) {
	return xs.split(token);
});

join = defn(function(token, xs) {
	return xs.join(token);
});

reverse = defn(function(xs) {
	return xs.reverse();
});

match = defn(function(expr, x) {
	return x.match(expr);
})

nnnot = function(bool) {
	return !bool;
}

replace = defn(function(pattern, sub, str) {
	return str.replace(pattern, sub);
});

flip = function(fn) {
	return fn.flip();
}

subtract = defn(function(x,y){
	return y - x;
});

words = function(x){
	return x.split(/\s+/);
};

unwords = function(xs){
	return xs.join(" ");
};

uniq = function(xs) {
	var result = [];
	for(var i=0;i<xs.length;i++ ) { if(result.indexOf(xs[i]) < 0) result.push(xs[i]); };
	return result;
}

uniqBy = defn(function(fun, xs) {
	var result = [];
	for(var i=0;i<xs.length;i++ ) { if(compose(uniq, map(fun))(result) < 1) result.push(xs[i]); };
	return result;
})


ifelse = defn(function(pred, f, g) {
	return function() {
		return pred.apply(this, arguments) ? f.apply(this, arguments) : g.apply(this, arguments);
	}
});

var tupleToObj = function(xs) {
	var obj = {};
	for(var i=0;i<xs.length;i++ ) {
		obj[xs[i][0]] = xs[i][1];
	}
	return obj;
}

set = function(attribute, fun) {
	var f = fun.toFunction()
	return function(x) {
		x[attribute] = f(x);
		return x;
	}
	
};

sortBy = function(fun, xs) {
	// altered from prototype
	var _sortBy = function(iterator, xs, context) {
	  return map('.value', map(function(value, index) {
	    return {
	      value: value,
	      criteria: iterator.call(context, value, index)
	    };
	  }, xs).sort(function(left, right) {
	    var a = left.criteria, b = right.criteria;
	    return a < b ? -1 : a > b ? 1 : 0;
	  }));
	}
	var f = fun.toFunction();
	return _sortBy(f, xs);
}

function argsToList(x){
	return Array.prototype.slice.call(x);
}
