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
  // console.log(cartList);
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

  //console.log("$ " + totalPrice + " total with no discount");
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  const result = Object.values(
    cartList.reduce((acc, cur) => {
      const key = `${cur.id}-${cur.name}-${cur.price}-${cur.type}`;
      if (!acc[key]) {
        acc[key] = { ...cur, quantity: 1 };
      } else {
        acc[key].quantity++;
      }
      return acc;
    }, {})
  );

  console.log(result);
  cart.push(result);
  applyPromotionsCart();
}

// Exercise 5

// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {

  console.log(cart) 

  let oilBottlesCount = 0;

  // Iterar sobre el array de productos para contar la cantidad de botellas de aceite en el carrito
  for (let i = 0; i < cart.length; i++) {
    if (products[i].id === 1) {
      console.log(oilBottlesCount); //porque aqui es 0 

      oilBottlesCount += cart[i].quantity;
      //console.log(oilBottlesCount);// porque aqui es NaN
    }
  }

  // Verificar si hay al menos 3 botellas de aceite en el carrito
  if (oilBottlesCount >= 3) {
    // Aplicar la oferta modificando el campo "subtotalWithDiscount" de cada botella de aceite
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === "cooking oil") {
        products[i].subtotalWithDiscount = 10;
        console.log(
          `El precio de ${products[i].name} ahora es de ${products[i].subtotalWithDiscount} euros`
        );
      }
    }
  }

  /* for (let i = 0; i < cart.length; i++) {
    cart[i].subtotal = cart[i].price * cart[i].quantity;
  }
  if (cart[i].offer === true && cart[i].quantity >= cart[i].offer.number) {
    const discount = (cart[i].subtotal * cart[i].offer.percent) / 100;
    cart[i].subTotalWithDiscount = cart[i].subtotal - discount;
  } else if (cart[i].offer === false && cart[i].quantity <= cart[i].offer.number) {
    cart[i].subTotalWithDiscount = cart[i].subtotal;
  } 

  console.log(cart[i].subTotalWithDiscount)*/
}

/*   let oilBottles = 0; // contador para ver cuantas bottelas de aceite hay en el carrito

  for (let i = 0; i < cart.length; i++) {
    const cantidad = cart[i].quantity;
    const precio = cart[i].price;
    // buscamos la cantidad y el precio de cada producto

    cart[i].subTotal = cantidad * precio;
  }

  if (cart[i].offer === undefined) {
    if (cantidad >= cart[i].offer.number) {
      const oferta = cart[i].offer.percent; // calcular el subtotal con desucento y agregar al objeto del producto. si eso no se cumple (no hay numero minmo) el subtotal con descuento es igual al subtotal sin descuento
    }
  }
}
console.log(cart); */

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
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
  console.log("Open Modal");
  printCart();
}
