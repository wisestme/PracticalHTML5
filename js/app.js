var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

let promise = new Promise(
	function(resolve, reject) {
		setTimeout(resolve, 100, 'successfully resolved');
	});

console.log(promise);