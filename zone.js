var gpio=require('wpi-gpio');

//Constants
var safetyTimeout = 15000; //15 seconds for demo purposes

module.exports = Zone;

function Zone(n){
	this._pin = n;
	this._safety = undefined;
	//Set it up to write high/low
	this._running = false;
	gpio.mode(this._pin, 'out');
}


Zone.prototype.on = function(){
	if(this._running){
		console.log('Already running Zone ' + this._pin);
		return;
	}
	gpio.write(this._pin, 1);
	console.log('Zone ' + this._pin + ' on.');
	this._running = true;

	//Set a safety off
	this._safety = setTimeout(this.off.bind(this), safetyTimeout);
}

Zone.prototype.off = function(){
	gpio.write(this._pin, 0);
	console.log('Zone ' + this._pin + ' off.');
	this._running = false;

	//Clear the safety
	clearTimeout(this._safety);
}

Zone.prototype.print = function(){
	return 'Zone' + this_pin;
}
