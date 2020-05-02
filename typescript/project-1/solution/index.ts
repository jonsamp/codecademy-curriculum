import restaurants from "./restaurants";

const dollarSigns = "$$";
const deliveryTimeMax = 90;
const hour: string = String(new Date().getHours());

function getRestaurantRecommendations() {
  const priceBracket: number = dollarSigns.length;

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (Number(restaurant.priceBracket) > priceBracket) return false;

    if (Number(restaurant.avgDeliveryTime) > deliveryTimeMax) return false;

    if (hour < restaurant.openHour || hour > restaurant.closeHour) return false;

    return restaurant;
  });

  let result: string;

  if (filteredRestaurants.length === 0) {
    result = "There are no restaurants available right now.";
  } else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
  }

  return console.log(result);
}

getRestaurantRecommendations();
