function addDnDHandlers() {
	let productImages = document.querySelectorAll('.product-article');
	let shoppingCartDropZone = document.querySelector('#shopper');
	let shoppingCart = document.querySelector("#shopper ul");
console.log(shoppingCart);
	for(let i = 0; i < productImages.length; i++) {
		productImages[i].addEventListener("dragstart", function(e) {
			e.dataTransfer.effectAllowed = 'copy';
			e.dataTransfer.setData("Text", this.getAttribute("id"));
		}, false);
	}

	shoppingCartDropZone.addEventListener("dragover", function(e) {
		if(e.preventDefault)
			e.preventDefault();
		e.dataTransfer.dropEffect = "copy";
		return false;
	}, false);

	

	shoppingCartDropZone.addEventListener("drop", function(e) {
		if (e.stopPropagation)
			e.stopPropagation();

		let productId = e.dataTransfer.getData("Text");
		let element = document.getElementById(productId);

		addProduct(element, productId);
		e.stopPropagation();

		return false;
	}, false);

	function addProduct(item, id) {
		let html = id + " " + item.getAttribute("data-price");

		let liElement = document.createElement('li');
		liElement.innerHTML = html;
		shoppingCart.appendChild(liElement);
	}
	
console.log(shoppingCartDropZone);
}

addDnDHandlers()

//let shoppingCartDropZone = document.querySelectorAll('#shopper');