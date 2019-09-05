/*var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};*/

let form = document.getElementById('main-form');




form.addEventListener('submit', event => {
	event.preventDefault();

	let bows = form.elements['Bows'];
	let wrapper = form.elements['Wrapper color'];
	console.log(bows.value, wrapper.value);

	let firstName = form.elements['first-name'];
	let lastName = form.elements['last-name'];
	let placeHolder = document.getElementById('first-name').getAttribute('placeholder');
	let userError = document.getElementById('user-error');
	console.log(userError.textContent, placeHolder);
	if (firstName.value < 3) {
		userError.textContent = `Invalid entry ${placeHolder}`;
userError.style.color = 'red';
firstName.style.borderColor = 'red';
firstName.focus();
	}
});

