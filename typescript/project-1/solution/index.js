"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var dollarSigns = "$$";
var deliveryTimeMax = 90;
var maxDistance = 10;
var hour = new Date().getHours();
var result;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurants_1["default"].filter(function (restaurant) {
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    if (hour < Number(restaurant.openHour) ||
        hour > Number(restaurant.closeHour)) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = "There are no restaurants available right now.";
}
else {
    result = "We found " + filteredRestaurants.length + " restaurants, the first is " + filteredRestaurants[0].name + ".";
}
console.log(result);
