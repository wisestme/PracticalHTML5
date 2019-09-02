var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let promise = new Promise(
	function(resolve, reject) {
		setTimeout(reject, 100, 'successfully resolved');
	});

promise.then(
	value => console.log('fulfilled:' + value),
	error => console.log('rejected: ' + error)
	);

