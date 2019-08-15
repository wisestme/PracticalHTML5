var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

function Car (name) {
this.carId = name;
this.start  = function() {
	console.log('Start: ' + this.carId);
};
}

let benz = new Car('G-Wagon');
console.log(benz.carId);
benz.start();