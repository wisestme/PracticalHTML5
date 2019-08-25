var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

class Phone {
	constructor(type) {
		this.type = type;
	}
	model(number) {
		return `Phone Model: Galaxy ${this.type} ${number}`
	}
}

let samsung = new Phone('Note');

console.log(samsung.model(10));