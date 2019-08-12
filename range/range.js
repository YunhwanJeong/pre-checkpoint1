//Array.from
function range(start, end) {
  const length = end - start;
  return Array.from({length}, (_, i) => start + i);
}

//recursive way
// function range(start, end) {
//   if(start >= end) {
//     return [];
//   }

//   return [start, ...range(start + 1, end)];
// }
range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []