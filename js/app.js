var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let app = (function() {
	let carId = 123;
	let getId = function() {
		return carId;
	};
	return {
		getId: getId,
	};
})();
console.log(app.getId());

let theReturn = function() {
	let vari = 'an string';
	return vari;
}

console.log(theReturn());