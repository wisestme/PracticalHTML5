var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};


let phones = [
	{brand: 'Samsung', model: 'Note10'},
	{brand: 'Nokia', model: 'Lumia'},
	{brand: 'Oppo', model: 'A5s'},
	{brand: 'Samsung', model: 'S10'}
]

let galaxyPhones = phones.filter(phone => phone.brand === 'Samsung'
);

console.log(galaxyPhones);

phones.forEach((phone, index) =>
	console.log(phone, index)
);
