// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

let products = [
	{
		//0
		id: 1,
		name: "cooking oil",
		price: 10.5,
		type: "grocery",
		offer: {
			number: 3,
			percent: 20,
		},
	},
	{
		//1
		id: 2,
		name: "Pasta",
		price: 6.25,
		type: "grocery",
	},
	{
		id: 3,
		name: "Instant cupcake mixture",
		price: 5,
		type: "grocery",
		offer: {
			number: 10,
			percent: 30,
		},
	},
	{
		id: 4,
		name: "All-in-one",
		price: 260,
		type: "beauty",
	},
	{
		id: 5,
		name: "Zero Make-up Kit",
		price: 20.5,
		type: "beauty",
	},
	{
		id: 6,
		name: "Lip Tints",
		price: 12.75,
		type: "beauty",
	},
	{
		id: 7,
		name: "Lawn Dress",
		price: 15,
		type: "clothes",
	},
	{
		id: 8,
		name: "Lawn-Chiffon Combo",
		price: 19.99,
		type: "clothes",
	},
	{
		id: 9,
		name: "Toddler Frock",
		price: 9.99,
		type: "clothes",
	},
];

// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
	// 1. Loop for to the array products to get the item to add to cart
	// 2. Add found product to the cartList array
	for (let i = 0; i < products.length; i++) {
		if (id === products[i].id) {
			cartList.push(products[i]);
		}
	}

	console.log("cartList", cartList);
	generateCart();

}

// Exercise 2
function cleanCart() {
	cartList = [];
	console.log(cartList);
}

// Exercise 3


function calculateTotal() {
	// Calculate total price of the cart using the "cartList" array
	//console.log(cartList);

	let totalPrice = 0;

	for (let i = 0; i < cart.length; i++) {
		let product = cart[i];
		totalPrice += product.subtotalWithDiscount;
	}

	document.getElementById("total_price").innerHTML = `Total: $ ${totalPrice}`;
}

// Exercise 4
function generateCart() {
	// Using the "cartlist" array that contains all the items in the shopping cart,
	// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
	cart = [];
	for (let i = 0; i < cartList.length; i++) {
		const product = cartList[i];
		console.log("product", product);
		const existingProduct = cart.find((item) => item.id === product.id);
		console.log("existing", existingProduct);
		if (existingProduct) {
			existingProduct.quantity++;
		} else {
			product.quantity = 1;
			cart.push(product);
		}
	}
	console.log("cart no promotions", cart);
	applyPromotionsCart();
	console.log("cart yes promotions", cart);
	calculateTotal();
	document.getElementById('count_product').innerHTML= cartList.length
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
	cart = cart.map((p) => ({ ...p, subtotalWithDiscount: 0 }));

	//console.log(cart);

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id === 1 && cart[i].quantity >= 3) {
			cart[i].subtotalWithDiscount = 10;
			cart[i].price = 10;
		} else if (cart[i].quantity >= 10 && cart[i].id === 3) {
			let discountOffer = products[2].offer.percent;			
			cart[i].subtotalWithDiscount =
			cart[i].price * (1 - discountOffer / 100);
			cart[i].price = cart[i].price * (1 - discountOffer / 100);
		} else {
			cart[i].subtotalWithDiscount = cart[i].price;
		}
		cart[i].subtotalWithDiscount =
			cart[i].subtotalWithDiscount * cart[i].quantity;
	}


	return cart;
	//console.log(cart);

	//printCart(cart);
}

// Exercise 6

// Fill the shopping cart modal manipulating the shopping cart dom

function printCart(cart) {
	console.log(cart); // me devuelve cart array vacio
	let shoppingCart = document.getElementById("shopping-table");
	let tableBody = document.getElementById("cart_list");
	tableBody.innerHTML = "";
	//shoppingCart.removeChild(tableBody);

	cart.forEach((p) => {
		let row = document.createElement("tr");

		let td = document.createElement("td");
		td.style.fontWeight = "bold";
		td.innerText = p.name;
		row.appendChild(td);

		td = document.createElement("td");
		td.innerText = p.price;
		row.appendChild(td);

		td = document.createElement("td");
		td.innerText = p.quantity;
		row.appendChild(td);

		td = document.createElement("td");
		td.innerText = p.subtotalWithDiscount;
		row.appendChild(td);

		//let tableBody = document.createElement("tbody");
		tableBody.appendChild(row);
	});

	shoppingCart.appendChild(tableBody);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
	// Refactor previous code in order to simplify it
	// 1. Loop for to the array products to get the item to add to cart
	// 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
	// 1. Loop for to the array products to get the item to add to cart
	// 2. Add found product to the cartList array
}

function open_modal() {
	console.log("MODAL ABIERTO", cart);
	printCart(cart);
}
