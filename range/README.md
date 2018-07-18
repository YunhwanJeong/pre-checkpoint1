# range

Complete the below function called range that takes two integers as parameters, start and end, and returns an array containing all the whole numbers between them starting with start and up to end (you can use a any loop)

After you write your function, you can test it using the above inputs to make sure that it behaves correctly.

- input: a starting number and an ending number
- output: an array of all the numbers between start and end, not including the end number
- constraints: if start and end are the same, return an empty array
- edge case: if start is greater than end, return an empty array
- assumptions:
  - receiving valid integer, `start < end`
  - count up from start to right before the end
  - put those numbers into an array
  - return the array