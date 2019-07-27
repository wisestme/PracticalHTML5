function addDnDHandlers() {
	let productImages = document.querySelectorAll('.product-article');
	let shoppingCartDropZone = document.querySelectorAll('#shopper');
	let shoppingCart = document.querySelectorAll("#shopper ul");

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
		let element document.getElementById(productId);

		addProduct(element, productId);
		ev.stopPropagation();

		return false;
	}, false);

	function addProduct(item, id) {
		let html = id + " " + item.getAttribute("product-price");

		let liElement = document.createElement('li');
		liElement.innerHTML = html;
		shoppingCart.appendChild(liElement);
	}
//console.log(shoppingCart);
}

//addDnDHandlers()