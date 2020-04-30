"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var dollarSigns = "$$";
var deliveryTimeMax = 90;
var mustBeOpen = true;
function getRestaurantRecommendations() {
    var priceBracket = dollarSigns.length; // TODO: fix this
    var filteredRestaurants = restaurants_1["default"].filter(function (restaurant) {
        if (restaurant.priceBracket > priceBracket)
            return false; // TODO: fix this
        if (restaurant.avgDeliveryTime > deliveryTimeMax)
            return false; // TODO: fix this
        if (restaurant.iSOpen && mustBeOpen)
            return false; // TODO: fix this
        return restaurant;
    });
    var result; // TODO: fix this
    if (filteredRestaurants.length === 0) {
        result = "There are no restaurants available right now.";
    }
    else {
        result = "We found " + filteredRestaurants.length + " restaurants, the first is " + filteredRestaurants[0].restaurantName + "."; // TODO: fix this
    }
    return console.log(result);
}
getRestaurantRecommendations();
