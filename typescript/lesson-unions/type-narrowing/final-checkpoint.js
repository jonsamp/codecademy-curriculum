function formatValue(value) {
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}
formatValue('Hiya');
formatValue(42);
//# sourceMappingURL=final-checkpoint.js.map