# Restaurant Recommender

## Overview

Here's the code of a program that recommends restaurants to its users. The program takes in a few variables, like price range, delivery time, and whether the restaurant is open or not to reccomend you the perfect spot.

The problem is this recommendation program is broken. While the program runs without a fatal JavaScript errors, it does not recommend any satiating suggestions. All we get is a disappointing "We found 2 restaurants, the first is undefined.".

Use your knowledge of TypeScript to fix type errors and add the missing features, so we can get on our way to good eats.

## Tasks

1. Start by running `tsc index.ts` in the command line, and notice the errors. Let's start with the first error:

   ```bash
   Type 'number' is not assignable to type 'string'.
   ```

   This error occurs because `priceBracket` is annotated as a `string`. Update the annotation to fix the error, then verify your result with `tsc index.ts`.

   <details>
     <summary>Hint:</summary>

   ```js
   const priceBracket: number = dollarSigns.length;
   ```

   </details>

2. Run `tsc index.ts`. Notice there's an error on line 10 because the `>` operator cannot act on two different types. This is because in the restaurants list, `priceBracket` is a string.

   Use the [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) constructor to transform one of these variables to the type you need.

   <details>
     <summary>Hint:</summary>

   There are two way to solve this error, which both include transforming one type into another. We could write:

   ```js
   if (Number(restaurant.priceBracket) > priceBracket)
   ```

   Alternatively, we could write:

   ```js
   if (restaurant.priceBracket > String(priceBracket))
   ```

   </details>

3. Run `tsc index.ts`. The next error is like the one from the previous task. Use a similar strategy to resolve this error.

   <details>
   <summary>Hint:</summary>

   We can use the `String` or `Number` constructors again here to solve this type mismatch:

   ```js
   if (Number(restaurant.avgDeliveryTime) > deliveryTimeMax)
   ```

   Alternatively, we could write:

   ```js
   if (restaurant.avgDeliveryTime > String(deliveryTimeMax))
   ```

   </details>

4. Run `tsc index.ts`. There's only one error left! It looks like we're trying to access the `restaurantName` property on a result, but that property does not exist. Read the error to try to find a property to print the restaurant's name here.

   <details>
   <summary>Hint:</summary>

   The error says

   ```bash
   ... does not exist on type '{ name: string; ...
   ```

   Instead of `restaurantName`, use `name` as the property.

   </details>

5. Now when you run `tsc index.ts`, you'll notice there are no remaining errors, however this program is still inferring that the `result` is of type `any`. You can see this if you hover over the `result` variable with your mouse. Figure out what type this variable should be and annotate it. Check your work with `tsc index.ts`.

   <details>
   <summary>Hint:</summary>

   ```js
   let result: string;
   ```

   </details>

6. When adding types with `tsc`, you've also compiled the code into JavaScript inside **index.js**.

   The program should now run and provide a result. Run the program with `node index.js` and verify the program recommends something other than `undefined`.

   <details>
   <summary>Hint:</summary>

   Run `node index.js` in the command line.

   </details>

7. Now that the code has proper typings, lets add a feature to make sure the restaurant is currently open based on the current time's hour.

   At the top of index.ts, write a variable named `hour` with a value of `new Date().getHours()`. Then annotate this variable with the correct type.

   <details>
   <summary>Hint:</summary>

   The `getHours` function returns a number representing the current hour in 24 hour time. Therefore you can annotate it with:

   ```js
   const hour: number = new Date().getHours();
   ```

   </details>

8. Within the `filter` function, we want to add another condition alongside the price bracket check and the delivery time check that will check if the restaurant is currently open. If the restaruant is not currently open, then return `false`.

   In the restarant list, each restaurant has a `openHour` and `closeHour` property. Compare the `hour` from the last step to make sure the restaurant is open.

   <details>
   <summary>Hint:</summary>

   We want to make sure the current hour is in between the opening and closing hours of the restaurant. To do this, you could write:

   ```js
   if (hour < restaurant.openTime || hour > restaurant.closeTime) return false;
   ```

   </details>

9. Run `tsc index.ts` again. You might notice there's another type mismatch in the condition you just wrote. Fix the error and verify with `tsc index.ts`.

   <details>
   <summary>Hint:</summary>

   Since the restaurant list has all of its values as strings, you may have a type mismatch when comparing the `hour` variable because it's a `number`. To solve this you could:

   Transform the `hour` variable to a string.

   ```js
   const hour: string = String(new Date().getHours());
   ```

   Transform `openTime` and `closeTime` into numbers.

   ```js
   if (
     hour < Number(restaurant.openTime) ||
     hour > Number(restaurant.closeTime)
   )
     return false;
   ```

   </details>

10. When `tsc index.ts` no longer exposes any type errors, run `node index.js` to view the result of the restaurant recommendation.

    Nice work on making this program more maintainable and free from a whole class of bugs caused by type mismatches.
