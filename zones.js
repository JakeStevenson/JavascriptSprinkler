var Zone = require("./zone.js");

var number = 2;
var zoneList = exports;
zoneList.zones = [];

for(i=0; i<number; i++){
	zoneList.zones.push(new Zone(i));
}


