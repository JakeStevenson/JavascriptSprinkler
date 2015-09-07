var zones = require('./zones.js').zones;

var run = exports;

run.runAll = function(){
	//Promise chain to run through each zone
	// This is confusing stuff
	var p = Promise.resolve();
	for(zone of zones){
		(function(zone){
			p = p.then(function(){
				return zone.run()
			});
		}(zone))
	}
	p.then(function(){console.log('done')});
};


