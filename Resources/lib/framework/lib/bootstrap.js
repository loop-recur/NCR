Bootstrap = {};

Bootstrap.run = function() {
	includeAllFiles();
	App.http_client = LoopRecur.HttpClient();
	
	function includeAllFiles() {
		map(includeFile, FileList);
	}

	function includeFile(name) {
		makeNamespace(name);
		Titanium.include(name);
	}

	function makeNamespace(name) {
		var kinds = {"views": Views, "controllers": Controllers, "layouts": Layouts, "config": Config, "lib": Lib, "helpers": Helpers, "ui": UI};
		var paths = name.split('/');
		var kind = paths[0];
		var namespace = paths[1];
		if(!kinds[kind][namespace]) kinds[kind][namespace] = {};
		return name;
	};

	function runEnvironment() {
		var isIphone = Titanium.Filesystem.resourcesDirectory.split("/")[1] === "var";
		var environment = isIphone ? "production" : "development";
		App.environments[environment]();
	}
};
