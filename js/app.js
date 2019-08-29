var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let x = 0;
let secsCounter = setInterval(function () {
	
	x += 1;
	console.log(`${x} seconds elapsed`);

	if (x === 10) {
		clearInterval(secsCounter);
	}

}, 1000)

