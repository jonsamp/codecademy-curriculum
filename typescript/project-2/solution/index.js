'use strict';
exports.__esModule = true;
var products_1 = require('./products');
var productName = 'hoodie';
var product = products_1['default'].filter(function (product) { return product.name === productName; })[0];
if (product.preSale === true) {
    console.log('We'll send you a message when your product has shipped.');
}
var shipping = 20;
var taxPercent = 0.05;
var taxTotal;
var total;
if (product.price > 25) {
    console.log('This item ships free!');
    shipping = 0;
}
var shippingAddress = '575 Broadway, Maine';
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log('\nProduct:  ' + product.name + '\nShipping: ' + shippingAddress + '\nPrice:    $' + product.price + '\nTax:      $' + taxTotal.toFixed(2) + '\nShipping: $' + shipping.toFixed(2) + '\nTotal:    $' + total.toFixed(2) + '\n');
