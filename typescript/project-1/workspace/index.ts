import restaurants from "./restaurants";

const dollarSigns = "$$";
const deliveryTimeMax = 90;

function getRestaurantRecommendations() {
  const priceBracket: string = dollarSigns.length;

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.priceBracket > priceBracket) return false;

    if (restaurant.avgDeliveryTime > deliveryTimeMax) return false;

    return restaurant;
  });

  let result;

  if (filteredRestaurants.length === 0) {
    result = "There are no restaurants available right now.";
  } else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].restaurantName}.`;
  }

  return console.log(result);
}

getRestaurantRecommendations();
