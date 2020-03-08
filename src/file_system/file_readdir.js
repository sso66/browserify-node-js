console.log("Mounting file_readdir.js... ");
var fs = require('fs')
var Path = require('path');
function WalkDirs(dirPath) {
	console.log(dirPath);
	fs.readdir(dirPath, function(err, entries) {
		for (var idx in entries) {
			var fullPath = Path.join(dirPath, entries[idx]);
			(function(fullPath) {
				fs.stat(fullPath, function(err, stats) {
					if (stats && stats.isDirectory()) {
						console.log(fullPath);
					} else if (stats && stats.isDirectory()) {
						WalkDirs(fullPath);
					}
				});
			})(fullPath);
		}
	});
}
WalkDirs("../data_io");
