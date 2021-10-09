const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
const item = 1;
let iterations = 0;

function LinearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    ++iterations;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(LinearSearch(arr, item), iterations);
