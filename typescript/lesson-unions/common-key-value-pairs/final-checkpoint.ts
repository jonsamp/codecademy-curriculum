type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const event = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const name = getFriendNameFromEvent(event);

console.log(`You have an update from ${name}.`);
