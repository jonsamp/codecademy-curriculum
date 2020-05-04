// Learner define all these types and values
let productName: string;
let price: number;
let taxPercent: number;

let isPresale: boolean;
let fullName: string;
let shippingAddress: string;

let subtotal: number;
let taxTotal: number;
let total: number;

productName = "Hogwarts, a history";
price = 40;
taxPercent = 0.05;

isPresale = true;
fullName = "Hermione Granger";
shippingAddress = "Gryffindor Common Room, Hogwarts";

subtotal = price;
taxTotal = subtotal * taxPercent;
total = subtotal + taxTotal;

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
