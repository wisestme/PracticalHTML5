var cartAdd  = document.getElementById('add-to-cart');

cartAdd.onclick = function () {
	alert('item added to your cart');
}

let app = (function(){
	console.log('IIFE');
})();