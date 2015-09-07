var Zone = require("./zone.js");
var zone0 = new Zone(0);
var zone1 = new Zone(1);

zone0.on();
zone0.on();
zone1.on();
zone0.off();
