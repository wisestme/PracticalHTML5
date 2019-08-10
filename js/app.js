var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
}

function startCar(carId){
	let message = "Starting...";

	let startFn = function turnKey(){
		let message = "Override";
	}
	console.log(message);
	startFn();
}

startCar(123);
//console.log(message);

if(5 === 5) {
	let message = 'Equal';
	//console.log(message);
}
console.log(message);