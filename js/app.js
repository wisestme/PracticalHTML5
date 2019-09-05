/*var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};*/

let form = document.getElementById('main-form');
let firstName = form.elements['first-name'];
let lastName = form.elements['last-name'];

let userError = document.getElementByClassName('user-error');
userError.textContent = 'Invalid entry';
userError.style.color = 'red';
firstName.style.borderColor = 'red';
firstName.focus();

form.addEventListener('submit', event => {
	let bows = form.elements['Bows'];
	let wrapper = form.elements['Wrapper color'];
	console.log(bows.value, wrapper.value);
	event.preventDefault();
});

