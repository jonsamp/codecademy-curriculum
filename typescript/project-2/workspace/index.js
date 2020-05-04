// Annotate types for all of these variables
var productName;
var price;
var taxPercent;
var isPresale;
var fullName;
var shippingAddress;
var subtotal;
var taxTotal;
var total;
// Assign each variable a value that matches its type
if (total > "50") {
    console.log("Please enjoy free shipping!");
}
if (isPresale === "true") {
    console.log("We'll send you a message when we ship your item.");
}
// if (shippingAddress.test("Hogwarts")) {
//   taxTotal = 0;
// }
console.log("\nProduct:  " + productName + "\nShipping: " + fullName + ", " + shippingAddress + "\nSubtotal: $" + subtotal.toFixed(2) + "\nTax:      $" + taxTotal.toFixed(2) + "\nTotal:    $" + total.toFixed(2) + "\n");
