var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};


let phones = [
	{brand: 'Samsung', model: 'Note10'},
	{brand: 'Nokia', model: 'Lumia'},
	{brand: 'Oppo', model: 'A5s'},
]

phones.forEach(function(phone) {
	console.log(phone);
})

