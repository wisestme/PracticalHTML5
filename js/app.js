var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let phone = {
	myPhone: function(color, nationality) {
		return 'I use a ' + color + ' ' + nationality + ' made ' + this.name + ' ' + this.model + ' phone';
	},
}

let GalaxyNoteTen = {
	name: 'Samsung',
	model: 'Galaxy Note 10',
}

let nokiaActive = {
	name: 'Nokia',
	model: 'Active A8',
}

let caller = phone.myPhone;
console.log(caller.apply(nokiaActive, ['white', 'Nigerian']));

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX.bind(module)());

let arrow = () => 123;

console.log(arrow());