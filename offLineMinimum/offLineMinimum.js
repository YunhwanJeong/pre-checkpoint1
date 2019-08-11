/**pseudo code
 * 
 * -strArr 입력
 * 
 *  -strArrClone
 *  -빈 배열 2개(숫자만, 결과)
 *  -key = "E"
 *   -E 만나면 숫자만의 min을 result로 보냄
 *   -아니면 숫자를 숫자만으로 보냄
 */

function offLineMinimum(strArr) {
  let onlyNum = [];
  let resultArr = [];
  let key = "E";

  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] === key) {
      let min = Math.min(...onlyNum);
      resultArr.push(min);
      onlyNum.splice(onlyNum.indexOf(min), 1);
    } else {
      onlyNum.push(Number(strArr[i]));
    }
  }
  return resultArr.join(",");
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'





// function offLineMinimum(strArr) {
//   let result = [];
//   let toNum = (el) => Number(el);
//   let toNumArr = strArr.map(toNum);
//   let toFindSmallestNum = function(smallestNum, eachNum) {
//     if(smallestNum > eachNum) {
//       return eachNum;
//     } else {
//       return smallestNum;
//     }
//   }

//   for(let i = 0; i < toNumArr.length; i++) {
//     if(Number.isNaN(toNumArr[i])) {
//       let toFindSmallNumArr = toNumArr.slice(0, i);
//       let smallestNum = toFindSmallNumArr.reduce(toFindSmallestNum);
//       for(let num of toFindSmallNumArr) {
//         if(num === smallestNum) {
//           result.push(num);
//         }
//       }
//     }
//   }
//   return result.join(", ");
// }




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