function Dog(name, weigth) {
	this.name = name;
	this.stomach = [];
	this.weigth = weigth;
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}
