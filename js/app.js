var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};



let benz = {
	carId: 'G-Wagon',
	getId: function() {
		console.log(this);
		return this.carId;
	},

}
console.log(benz.getId());

let newCar = {carId: 'V-boot'};
let eClass = {carId: 'E-Class'}

console.log(benz.getId.call(eClass));

console.log(benz.getId.call(newCar));

