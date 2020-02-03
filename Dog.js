var chalk = require('chalk');
function Dog(name, weigth) {
	this.name = name;
	this.stomach = [];
	this.weigth = weigth;
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}


Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is '+ chalk.red(this.name));
};

module.exports = Dog;