var later = require('later');
var run = require('./run.js');

var schedule = later.parse.text("every 10 seconds");
var timer = later.setInterval(run.runAll, schedule);
