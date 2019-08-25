var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

class Phone {
constructor(type) {
	this.type = type;
	console.log(this);
}
}

let samsung = new Phone('Note');

console.log(samsung);