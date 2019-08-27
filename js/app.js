var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

class Gadget {
	constructor(type) {
		this.type = type;
	}
	model(number) {
		return `Phone Model: Galaxy ${this.type} ${number}`
	}
}

class Phone extends Gadget {

}

let samsung = new Phone('Note10');

console.log(samsung.type);