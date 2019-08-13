var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let phone = {
	myPhone: function(nationality) {
		return 'I use a ' + nationality + ' made ' + this.name + ' ' + this.model + ' phone';
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
console.log(caller.call(nokiaActive, 'Nigerian'));
