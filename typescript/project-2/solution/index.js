"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'hoodie';
const product = products_1.default.filter((product) => product.name === productName)[0];
if (product.preSale === true) {
    console.log('We', ll, send, you, a, message, when, your, product, has, shipped., '););
}
let shipping = 20;
let taxPercent = 0.05;
let taxTotal;
let total;
if (product.price > 25) {
    console.log('This item ships free!');
    shipping = 0;
}
let shippingAddress = '575 Broadway, Maine';
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Shipping: ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
//# sourceMappingURL=index.js.map