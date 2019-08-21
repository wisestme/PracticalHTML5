var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};


let phone = {
	brand: "Samsung",
	category: 'Note',
	model: 900,
}

console.log(JSON.stringify(phone));

