/**psedo code
 * 
 * -strArr 입력
 *  -빈 배열 생성해두기
 *  -숫자로 형변환
 *   -nan 만나면 그 전까지 가장 작은 수 push
 *   -return join
 *  
 */

function offLineMinimum(strArr) {
  let result = [];
  let toNum = (el) => Number(el);
  let toNumArr = strArr.map(toNum);
  let toFindSmallestNum = function(smallestNum, eachNum) {
    if(smallestNum > eachNum) {
      return eachNum;
    } else {
      return smallestNum;
    }
  }

  for(let i = 0; i < toNumArr.length; i++) {
    if(Number.isNaN(toNumArr[i])) {
      let toFindSmallNumArr = toNumArr.slice(0, i);
      let smallestNum = toFindSmallNumArr.reduce(toFindSmallestNum);
      for(let num of toFindSmallNumArr) {
        if(num === smallestNum) {
          result.push(num);
        }
      }
    }
  }
  return result.join(", ");
}


offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'

// console.log 1

// function offLineMinimum(strArr) {
//   var result = [];
//   var toNum = (el) => Number(el);
//   var toNumArr = strArr.map(toNum);
//   console.log("toNumArr: ", toNumArr);
//   var toFindSmallestNum = function(smallestNum, eachNum) {
//     if(smallestNum > eachNum) {
//       return eachNum;
//     } else {
//       return smallestNum;
//     }
//   }

//   for(let i = 0; i < toNumArr.length; i++) {
//   console.log("toNumArr[i]: ", toNumArr[i]);
//     if(Number.isNaN(toNumArr[i])) {
//     console.log("-----------firstIfPass------------");
//       var toFindSmallNumArr = toNumArr.slice(0, i);
//       console.log("toFindSmallNumArr: ", toFindSmallNumArr);
//       var smallestNum = toFindSmallNumArr.reduce(toFindSmallestNum);
//       console.log("smallestNum: ", smallestNum);
//       for(var num of toFindSmallNumArr) {
//       console.log("num: ", num);
//         if(num === smallestNum) {
//         console.log("--------------secondIfPass--------------");   
//           result.push(num);
//           console.log("result: ", result);
//         }
//       }
//     }
//   }
//   return result.join(", ");
// }

// console.log 2

// function offLineMinimum(strArr) {
//   var result = [];
//   var toNum = (el) => Number(el);
//   var toNumArr = strArr.map(toNum);
//   console.log("toNumArr: ", toNumArr);
//   var toFindSmallestNum = function(smallestNum, eachNum) {
//     if(smallestNum > eachNum) {
//       return eachNum;
//     } else {
//       return smallestNum;
//     }
//   }

//   for(let i = 0; i < toNumArr.length; i++) {
//   console.log("toNumArr[i]: ", toNumArr[i]);
//     if(Number.isNaN(toNumArr[i])) {
//     console.log("-----------firstIfPass------------");
//       var toFindSmallNumArr = toNumArr.slice(0, i);
//       console.log("toFindSmallNumArr: ", toFindSmallNumArr);
//       var smallestNum = toFindSmallNumArr.reduce(toFindSmallestNum);
//       result.push(smallestNum);
//     }
//   }
//   return result.join(", ");
// }