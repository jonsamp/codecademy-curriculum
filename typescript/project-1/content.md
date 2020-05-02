# Restaurant Recommender

## Overview

Here's the code of a program that recommends restaurants from a list of restaurants. The program should take a few variables, like price range, delivery time, distance, and whether the restaurant is open to reccomend you the perfect spot.

The problem is that this recommendation program does not recommend much. While the program runs without any fatal JavaScript errors, it does not recommend any satiating suggestions. All we get is a disappointing "We found 3 restaurants, the first is undefined.".

Use your knowledge of TypeScript to fix type errors and add the missing features, so we can get on our way to good eats.

## Tasks

1. Start by running `tsc index.ts` in the command line, and notice the errors. Scroll to the top of the list to see the first error:

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

2. Run `tsc index.ts`. Notice there's another error on line 11 because the `>` operator cannot act on two different types. Since we are using the `>` operator, we need to compare two numbers. If you look at the **restaurants.ts** file, we can see that the `priceBracket` property has string values. Since you defined `priceBracket` in **index.ts** as a `number` in the last step, use the [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) constructor to transform the restaurant's price bracket property to a number.

   <details>
   <summary>Hint:</summary>

   We can use the `Number` constructor to transform `restaurant.priceBracket`:

   ```js
   if (Number(restaurant.priceBracket) > priceBracket)
   ```

   </details>

3. Run `tsc index.ts`. The next error is like the one from the previous task. This time, assign the `deliveryTimeMax` variable to a value that will match a restaurant's `deliveryTimeMinutes` property's value in type.

   <details>
   <summary>Hint:</summary>

   ```js
   const deliveryTimeMax = 90;
   ```

   </details>

4. Run `tsc index.ts`. The next error is like the ones from the previous tasks. Fix the type before moving on.

   <details>
   <summary>Hint:</summary>

   Each restaurant has a `distance` property with a string as its value, while our program has a `maxDistance` variable with a number as its value. Since we are using the `>` operator, we want to compare two numbers.

   </details>

5. Run `tsc index.ts`. There's only one error left! It looks like we're trying to access the `restaurantName` property on a restaurant but that property does not exist. Read the error to try to find a property to print the restaurant's name here.

   <details>
   <summary>Hint:</summary>

   The error says

   ```bash
   ... does not exist on type '{ name: string; ...
   ```

   Instead of `restaurantName`, use `name` as the property.

   </details>

6. Now when you run `tsc index.ts`, you'll notice there are no remaining errors, however this program is still inferring that the `result` is of type `any`. You can see this if you hover over the `result` variable with your mouse. Figure out what type this variable should be and annotate it. Check your work with `tsc index.ts`.

   <details>
   <summary>Hint:</summary>

   ```js
   let result: string;
   ```

   </details>

7. When adding types with `tsc`, you've also compiled the code into JavaScript inside **index.js**.

   The program should now run and provide a result. Run the program with `node index.js` and verify the program recommends something other than `undefined`.

   <details>
   <summary>Hint:</summary>

   Run `node index.js` in the command line.

   </details>

8. Now that the code has proper typings, lets add a feature to make sure the restaurant is currently open based on the current time's hour.

   At the top of index.ts, write a variable named `hour` with a value of `new Date().getHours()`. Then annotate this variable with the correct type.

   <details>
   <summary>Hint:</summary>

   The `getHours` function returns a number representing the current hour in a 24 hour time format (example: 3PM is 15). Therefore you can annotate it with:

   ```js
   const hour: number = new Date().getHours();
   ```

   </details>

9. Within the `filter` function, we want to add another condition alongside the existing checks that will check if the restaurant is currently open. If the restaruant is not currently open, then return `false` (this will prevent the restaurant from appearing in the result).

   In the restarants list in **restaurants.ts**, each restaurant has an `openHour` and a `closeHour` property. Using an `if` statement, compare the `hour` from the last step against `openHour` and `closeHour` to make sure the restaurant is currently open.

   <details>
   <summary>Hint:</summary>

   We want to make sure the current `hour` is between the opening and closing hours of the restaurant. To do this, we could write a condition that checks if the current `hour` is before `openHour` or after `closeHour`:

   ```js
   if (hour < restaurant.openHour || hour > restaurant.closeHour) {
     return false;
   }
   ```

   </details>

10. Run `tsc index.ts` again. You might notice there's another type mismatch in the condition you just wrote. Fix the error and verify with `tsc index.ts`.

   <details>
   <summary>Hint:</summary>

    Since the restaurant list has all of its values as strings, you may have a type mismatch when comparing the `hour` variable because it's a `number`. To solve this we could transform `openHour` and `closeHour` into numbers.

    ```js
    if (
      hour < Number(restaurant.openHour) ||
      hour > Number(restaurant.closeHour)
    ) {
      return false;
    }
    ```

   </details>

11. When `tsc index.ts` no longer exposes any type errors, run `node index.js` to view the result of the restaurant recommendation.

    Nice work on making this program more maintainable and free from a whole class of bugs caused by type mismatches.
