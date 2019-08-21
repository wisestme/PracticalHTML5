var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};


class Phone {
	constructor(id) {
		this.id = id;
	}

	identify() {
		return `The model of this phone is ${this.id}`;
	}
}

let samsung = new Phone('Note10');

console.log(samsung.identify());