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

let phones = [
	{brand: 'Samsung'},
	{brand: 'Nokia'},
	{brand: 'Oppo'},
	{brand: 'Sony'},
];

let phonesJSON = JSON.stringify(phones);

console.log(phonesJSON);

