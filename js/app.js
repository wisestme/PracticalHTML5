var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

try {
	throw new Error('my custom error');
}

catch(error) {
	console.log('error:',error);
}

finally {
	console.log('continuing... this block must run');
}
