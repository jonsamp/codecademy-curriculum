// type narrowing, union type with array
function createHexCode(color) {
    if (typeof color === 'string') {
        console.log(color.toUpperCase());
    }
    if (Array.isArray(color)) {
        console.log(`#${color.join('')}`);
    }
}
createHexCode('#5b0ddb');
createHexCode([0, 0, 0]);
// type narrowing with specific method calls
function matches(answer, input) {
    if (typeof answer === 'string' && typeof input === 'string') {
        return answer.toLowerCase() === input.toLowerCase();
    }
    if (typeof answer === 'number' && typeof input === 'number') {
        return answer === input;
    }
    if (typeof answer !== typeof input) {
        return 'Answer and input types do not match.';
    }
}
// type narrowing with specific method calls
function formatValue(value) {
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}
// type narrowing with specific method calls
function formatValue(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed(2);
    }
    return value.toString();
}
const formattedValue = formatValue(false);
function getUser() {
    const randomChance = Math.random() >= 0.5;
    if (randomChance) {
        return { id: 1, username: 'flyingCroissant' };
    }
    else {
        return 'Could not retrieve user.';
    }
}
const userData = getUser();
console.log(userData);
//# sourceMappingURL=snippets.js.map