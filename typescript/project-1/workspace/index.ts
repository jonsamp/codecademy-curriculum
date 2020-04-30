import restaurants from "./restaurants";

const dollarSigns = "$$";
const deliveryTimeMax = 90;
const mustBeOpen = true;

function getRestaurantRecommendations() {
  const priceBracket: string = dollarSigns.length; // TODO: fix this mistyped variable

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.priceBracket > priceBracket) return false; // TODO: fix this now mistyped comparison

    if (restaurant.avgDeliveryTime > deliveryTimeMax) return false; // TODO: fix this to be the correct type

    if (restaurant.iSOpen && mustBeOpen) return false; // TODO: fix this to be the correct data property

    return restaurant;
  });

  let result; // TODO: fix this to not be any

  if (filteredRestaurants.length === 0) {
    result = "There are no restaurants available right now.";
  } else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].restaurantName}.`; // TODO: fix this to have the correct property
  }

  return console.log(result);
}

getRestaurantRecommendations();
