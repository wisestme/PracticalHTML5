var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

try {
	let car = newCar;
}

catch(error) {
	console.log('error:',error);
}

finally {
	console.log('continuing... this block must run');
}
