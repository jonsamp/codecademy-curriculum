// Annotate types for all of these variables
let productName;
let price;
let taxPercent;

let isPresale;
let fullName;
let shippingAddress;

let subtotal;
let taxTotal;
let total;

// Assign each variable a value that matches its type

// After assigning each variable, verify and correct the remaining logic
if (total > "50") {
  console.log("Please enjoy free shipping!");
}

if (isPresale === "true") {
  console.log("We'll send you a message when we ship your item.");
}

if (shippingAddress.test("Hogwarts")) {
  taxTotal = 0;
}

console.log(`
Product:  ${productName}
Shipping: ${fullName}, ${shippingAddress}
Subtotal: $${subtotal.toFixed(2)}
Tax:      $${taxTotal.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
