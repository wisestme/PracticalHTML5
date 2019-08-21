var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let x = 0;

let intervalId = setInterval(function() {
	x += 1;
	console.log(`${x} seconds passed`);
}, 1000);