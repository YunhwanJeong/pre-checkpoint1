3/**pseudo code
 * 
 * -strArr 입력
 *  -hammingDistanceCount
 *  -두 str의 character들 비교
 *   -다르면 hammingDistanceCount +
 *   -return hammingDistanceCount
 */

function hammingDistance(strArr) {
  let hammingDistanceCount = 0;
  let str1 = strArr[0];
  let str2 = strArr[1];

  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) {
      hammingDistanceCount++;
    }
  }
  return hammingDistanceCount;
}

hammingDistance(["coder", "codec"]); // => 1
hammingDistance(["10011", "10100"]); // => 3
hammingDistance(["helloworld", "worldhello"]); // => 8
