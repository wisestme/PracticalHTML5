var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let trackCar = (carId, city='Aba') => {
	output = `Tracking ${carId} in ${city}`;
	console.log(output);
}

trackCar('Rols Royce', 'Lagos');