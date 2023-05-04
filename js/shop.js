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

	console.log(cartList);
	calculateTotal();
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

	for (let i = 0; i < cartList.length; i++) {
		let product = cartList[i];
		totalPrice += product.price;
	}

	document.getElementById("total_price").innerHTML = `Total: $ ${totalPrice}`;
}

// Exercise 4
function generateCart() {
	// Using the "cartlist" array that contains all the items in the shopping cart,
	// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
	let cart = [];
	for (let i = 0; i < cartList.length; i++) {
		const product = cartList[i];
		const existingProduct = cart.find((item) => item.id === product.id);
		if (existingProduct) {
			existingProduct.quantity++;
		} else {
			product.quantity = 1;
			cart.push(product);
		}
	}

	console.log(cart);
	applyPromotionsCart(cart);
	
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart(cart) {
	cart = cart.map((p) => ({ ...p, subtotalWithDiscount: 0 }));

	console.log(cart);

	let hasPromotion1 = false;
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id === 1 && cart[i].quantity >= 3) {
			cart[i].subtotalWithDiscount = 10;
			hasPromotion1 = true;
		} else {
			cart[i].subtotalWithDiscount = cart[i].price;
		}
	}
	// console.log(cart);

	if (!hasPromotion1)
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].quantity >= 10 && cart[i].id === 3) {
				discountOffer = cart[0].offer.percent;
				cart[i].subtotalWithDiscount =
					(cart[i].price * discountOffer) / 100; /// imprime 1.5 para los cupcakes
			} else {
				cart[i].subtotalWithDiscount = cart[i].price;
			}
		}
	//console.log(cart);

	printCart(cart);
}

// Exercise 6

// Fill the shopping cart modal manipulating the shopping cart dom

function printCart(cart) {
    let shoppingCart = document.getElementById("shopping-table");
    let tableBody = document.getElementById("cart_list");


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
	console.log("MODAL ABIERTO");
	printCart(cart);
}
