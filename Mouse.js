function Mouse(name, weigth) {
	this.name = name;
	this.weigth = weigth;
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}


module.exports = Mouse;