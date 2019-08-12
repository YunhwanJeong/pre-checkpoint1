var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
/**pseudo code
 * 
 * -people 입력
 *  -map 활용
 *  -reduce 활용
 */
function longestName(people) {
  let getFullName = function(obj) {
    if(!("middle" in obj.name)) {
      return obj.name.first + " " + obj.name.last;
    } else {
      return obj.name.first + " " + obj.name.middle + " " + obj.name.last;
    }
  }
  let findLongestName = function(longestName, eachName) {
    if(longestName.length < eachName.length) {
      return eachName;
    } else {
      return longestName;
    }
  }

  let fullNameArr = people.map(getFullName);
  let result = fullNameArr.reduce(findLongestName);

  return result;
}

longestName(people); //"Alyssa P. Hacker"