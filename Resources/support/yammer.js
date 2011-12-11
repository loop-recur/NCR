Yammer = (function() {
	Ti.include('support/oauth.js');
	Ti.include('support/sha1.js');
	
	var timeout = 11000;
	var cfg = {};
	var accessor = {};
	
	function getHeader(parameters) {
		var init = true;
		var header = "OAuth ";
		
		for (var i=0; i<parameters.length; i++) {
			if (init) {
				init = false;
			} else {
				header = header + ",";
			}
			header = header + parameters[i][0] + '="' + escape(parameters[i][1]) + '"';
		}
		return header;
	}

	function set_message(url, method, params) {
		var message = {
			action: url,
			method: (method=='GET') ? method : 'POST',
			parameters: (params!=null) ? OAuth.decodeForm(params) : []
		};
		message.parameters.push(['oauth_consumer_key', cfg.oauth_consumer_key]);
		message.parameters.push(['oauth_signature_method', "HMAC-SHA1"]);
		message.parameters.push(["oauth_timestamp", OAuth.timestamp().toFixed(0)]);
		message.parameters.push(["oauth_nonce", OAuth.nonce(42)]);
		message.parameters.push(["oauth_version", "1.0"]);

		return message;
	}

	function api(url, method, params, callback) {
		if (params==null || typeof(params)=="undefined") params = "";

		var initparams = params;
		params = params + "&oauth_token="+cfg.access_token;

		var message = set_message(url, method, params);

		OAuth.SignatureMethod.sign(message, accessor);

		var finalUrl = OAuth.addToURL(message.action, initparams);
		
		var xhr = new HTTPClientWithCache({baseUrl: '', retryCount: 0, cacheSeconds: 120});
	 
		xhr.options.onload = function(resp) {
			var json = JSON.parse(resp.responseText);
			callback(json);
		}
		
		xhr.options.onerror = function(resp) {
			log(resp.responseText);
		}

 		xhr.options.timeout = timeout;
		xhr.open(method, finalUrl);
		
		var header = getHeader(message.parameters);

		xhr.setRequestHeader("Authorization", header);		
		xhr.send();
	}
	
	var config = function(attrs) {
		cfg = attrs;		
		accessor = { consumerSecret: cfg.consumer_secret, tokenSecret: cfg.access_token_secret };
	}
	
	var messages = function(cb) {
		api("https://www.yammer.com/api/v1/messages.json", "GET", '', function(response) {
			cb(response);
		});
	}
	
	return {config: config, messages : messages}
})();
