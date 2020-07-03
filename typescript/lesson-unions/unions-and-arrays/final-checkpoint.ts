function formatListings(values: (string | number)[]) {
  return values.map((value) => {
    if (typeof value === "string") {
      return value.toUpperCase();
    }

    if (typeof value === "number") {
      return `$${value.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
]);

console.log(result);
