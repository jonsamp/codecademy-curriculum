# All Types of Things Shop

## Overview

Welcome to our new online shop: TypeMart! Well, almost. We are trying to get this shop started and we need your help to code a crucial piece of the code: the purchase flow!

We think you're the right person for the job because it's really important to us that the purchase flow is type safe. (All that type safety will allow us to sleep well at night.)

Currently we are in production of few _types_ of products and we can't wait to expand as we start to sell our first items. We will have to find the item our visitor selected, then figure out how much it costs.

Follow the tasks below to create a purchase flow for TypeMart visitors.

## Tasks

1. In **index.ts**, start by importing `products` from the **products.ts** file. It currently has a list of products we'll use to open up our shop.

   <details>
   <summary>Hint:</summary>

   ```js
   import products from "./products";
   ```

   </details>

2. Next, we need to store the name of the product the user is trying to find. Declare a variable named `productName`, annotate it with the appropriate type, and set its value to one of the product names in **products.ts**.

   <details>
   <summary>Hint:</summary>

   ```js
   const productName: string = "fanny pack";
   ```

   </details>

3. Now that we have the product's name in a variable, we need to find it by name from our list of `products`. Use a method to find a product inside `products` that matches the string stored in the `productName` variable.

Once you have found the matching product, store it a variable named `product`.

   <details>
   <summary>Hint:</summary>
   There are many ways we could accomplish this. One way is to use the `filter` method, then take the first result:

```js
const product = products.filter((product) => product.name === productName)[0];
```

   </details>

4. Now that we have a product, we have some shop-specific logic to create. First, if the product has a `preSale` property of `true`, then use `console.log` to print "We'll send you a message when your product has shipped.".

Once you've implemented this condition, use `tsc index.ts` to compile your code, then `node index.js` to run your program. Make sure that the "fanny pack" product makes the message print and that the "beanie" product does not (since it's not on pre-sale).

   <details>
   <summary>Hint:</summary>
   Try using the `===` operator to make sure the `preSale` property is `true`, then use `tsc index.ts` to find errors.

Since the data we provided has strings as the values of the `preSale` properties in **products.ts**, both `"true"` and `"false"` are truthy values if you write a condition like `if (product.preSale) ...`.

A great way to make this condition work as expected would be to change the `preSale` values in **products.ts** to be booleans.

   </details>

5. Now we're ready to calculate the price of the item. To provide the shopper a receipt, we'll need to show the price, tax, shipping, and total price. First, declare two variables: `shipping` and `taxPercent`. Make the `shipping` variable's value `20` (as in \$20) and annotate it with the correct type.

Next, declare a variable named `taxPercent` with a value of `0.05` (as in 5%), then annotate it with the correct type.

   <details>
   <summary>Hint:</summary>

```js
let shipping: number = 20;
let taxPercent: number = 0.05;
```

   </details>

6. Now declare two more variables named `taxTotal` and `total`. We will define their values later so they should be `undefined`. Then annotate them both as numbers.

   <details>
   <summary>Hint:</summary>

```js
let taxTotal: number;
let total: number;
```

   </details>

6. One special we will have at TypeMart is that if the price of an item is over \$25, then we will provide free shipping. Write a conditional that sets `shipping` to `0` if the `price` of the `product` is over `25`. In addition, write a `console.log` stating that we provide free shipping for this product.

Use `tsc index.ts` and `node index.js` to verify that "fanny pack" prints the message about free shipping and "shirt" does not.

   <details>
   <summary>Hint:</summary>

If we write code like `if (product.price > 25)`, you'll notice that `tsc index.ts` reports a type error because the prices in **products.ts** have string values. To solve this error, we could either use the `Number` constructor to transform `product.price`, but it's probably better to change the values in **products.ts** to be the types you need.

Since this is the second time our data has had the incorrect type, we could also solve this by using `map` on the `products` array to transform its values into the ones we need. Then we could use the result of the `map` throughout our program.

   </details>

7. Since our shop operates out of New York City, we're required to pay extra tax when someone from New York buys from TypeMart. Declare a variable named `shippingAddress`, provide a shipping address as its value, then annotate the variable with the correct type.

   <details>
   <summary>Hint:</summary>

```js
const shippingAddress: string = "575 Broadway, New York City, New York",
```

   </details>

8. If the shipping address contains the value "New York", then we need to set the `taxPercent` to `0.1` (a shocking 10%). Use the [`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) method to check if the string matches.

<details>
   <summary>Hint:</summary>

```js
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
}
```

   </details>

9. We're finally ready to start calculating `taxTotal` and `total`. Take the `product.price` and multiply it by the `taxPercent` to get the `taxTotal`.

Run `tsx index.ts` to check for any type errors.

<details>
   <summary>Hint:</summary>

```js
taxTotal = product.price * taxPercent;
```

   </details>

10. Next, calculate the `total`. The `total` should be the summation of the `product. price`, `taxTotal`, and `shipping`.

Run `tsc index.ts` to check for any type errors.

<details>
   <summary>Hint:</summary>

```js
total = product.price + taxTotal + shipping;
```

   </details>

11. Now that we have all the required data for the receipt, use `console.log` to print one. Use the following code to print the receipt:

```js
console.log(`
Product:  ${product.name}
Shipping: ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
```

Then run `tsc index.ts` and `node index.js` to verify the receipt is correct. If your logic is correct, a "fanny pack" bought inside New York is \$33, while a "hoodie" bought outside of New York is \$45.15.
