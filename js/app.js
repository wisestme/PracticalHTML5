var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
}

function sendCars(...carIDs) {
	carIDs.forEach(id => console.log(id));
}
//sendCars(4, 10, 6);
//console.log(sendCars(4, 10, 6));


function restP(s, ...arr) {
	
	for(i=0; i < 6; i++) {
		s = 0;
		s += i;
		console.log(s);

	}
	console.log(s);
	return s;
}
//console.log(s);
restP(1, 2, 3, 4, 5, 6, 7, 8);

const checkArr = [5, 7, 9, 8];

const newArr  = [67, ...checkArr];
console.log(newArr);

let carIDs = [2, 7, 8, 10];
[carA, carB, carC, carD] = carIDs;
console.log(carA);

let phone = {
	brand: 'Samsung',
	model: 'Note 10',
	nairaPrice: 300,
};

let {brand, model: modelName} = phone;
console.log(modelName);

for(let i = 0; i <= 10; i++){
	if(i % 2 === 0) {
		continue;
	}
	console.log(i);
}