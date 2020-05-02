"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var dollarSigns = "$$";
var deliveryTimeMax = 90;
var hour = String(new Date().getHours());
function getRestaurantRecommendations() {
    var priceBracket = dollarSigns.length;
    var filteredRestaurants = restaurants_1["default"].filter(function (restaurant) {
        if (Number(restaurant.priceBracket) > priceBracket)
            return false;
        if (Number(restaurant.avgDeliveryTime) > deliveryTimeMax)
            return false;
        if (hour < restaurant.openHour || hour > restaurant.closeHour)
            return false;
        return restaurant;
    });
    var result;
    if (filteredRestaurants.length === 0) {
        result = "There are no restaurants available right now.";
    }
    else {
        result = "We found " + filteredRestaurants.length + " restaurants, the first is " + filteredRestaurants[0].name + ".";
    }
    return console.log(result);
}
getRestaurantRecommendations();
