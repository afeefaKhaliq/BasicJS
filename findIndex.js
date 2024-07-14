const arr = ["pen", "pencil", "pointer", "marker"];
const key = "pen";
const index = arr.findIndex(item => item == key);

console.log(`The index of ${JSON.stringify(key)} is: ${JSON.stringify(index)}`);