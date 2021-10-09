const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
const item = 1;
let iterations = 0;

function LinearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    ++iterations;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(LinearSearch(array, item), iterations);
