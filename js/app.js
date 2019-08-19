var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
};

function Car(model) {
	this.model = model;
	
}

Car.prototype.startEngine = function () {
		console.log(`Starting ${this.model} engine sound`);
	}

let benz = new Car("G-Wagon");
console.log(benz.model);
benz.startEngine();
