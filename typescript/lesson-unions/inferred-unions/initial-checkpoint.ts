type User = {
  id: number;
  username: string;
};

function getUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "flyingCroissant" };
  } else {
    return "Could not retrieve user.";
  }
}
