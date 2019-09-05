/*var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};*/

let form = document.getElementById('main-form');

form.addEventListener('submit', event => {
	let bows = form.elements['Bows'];
	let wrapper = form.elements['Wrapper color'];
	console.log(bows.value, wrapper.value);
	event.preventDefault();
});

