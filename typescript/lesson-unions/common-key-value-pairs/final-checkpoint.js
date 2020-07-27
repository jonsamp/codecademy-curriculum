function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
const event = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
};
const name = getFriendNameFromEvent(event);
console.log(`You have an update from ${name}.`);
//# sourceMappingURL=final-checkpoint.js.map