const strings = [
    "Afeefa",
    "Afifa",
    "Zaiinab",
    "Zumar"
];

const longestString = strings.reduce((longest, current) =>
    longest.length > current.length ? longest : current   //store longest length in longest and then compare it with remaining

);

console.log(`The object with the highest value is: ${JSON.stringify(longestString)}`);