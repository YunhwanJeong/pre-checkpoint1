const fs = require('fs');
const srcBillTotal = fs.readFileSync('./billTotal/billTotal.js');
const srcGetFullName = fs.readFileSync('./getFullName/getFullName.js');
const srcLongestName = fs.readFileSync('./longestName/longestName.js');
const srcRange = fs.readFileSync('./range/range.js');
const srcHammingDistance = fs.readFileSync('./hammingDistance/hammingDistance.js');
const srcOfflineMinimum = fs.readFileSync('./offLineMinimum/offLineMinimum.js');


describe('', () => {

  it('billTotal', () => {
    eval(srcBillTotal.toString());

    expect(typeof billTotal).toBe('function');
    expect(billTotal(10.00)).toBe(12.45);
  });

  it('getFullName', () => {
    eval(srcGetFullName.toString());

    expect(typeof getFullName).toBe('function');
    expect(getFullName(person)).toBe('Alyssa P. Hacker');
  });

  it('longestName', () => {
    eval(srcLongestName.toString());

    expect(typeof longestName).toBe('function');
    expect(longestName(people)).toBe("Alyssa P. Hacker");
  });

  it('range', () => {
    eval(srcRange.toString());

    expect(typeof range).toBe('function');
    expect(range(0, 4)).toEqual([0, 1, 2, 3]);
    expect(range(2, 7)).toEqual([2, 3, 4, 5, 6]);
    expect(range(10, 10)).toEqual([]);
    expect(range(10, 2)).toEqual([]);
  });

  it('hammingDistance', () => {
    eval(srcHammingDistance.toString());

    expect(typeof hammingDistance).toBe('function');
    expect(hammingDistance(["coder", "codec"])).toBe(1);
    expect(hammingDistance(["10011", "10100"])).toBe(3);
    expect(hammingDistance(["helloworld", "worldhello"])).toBe(8);
  });

  it('offlineMinimum', () => {
    eval(srcOfflineMinimum.toString());

    expect(typeof offLineMinimum).toBe('function');
    expect(offLineMinimum(["1","2","E","E","3"])).toBe('1,2');
    expect(offLineMinimum(["4","E","1","E","2","E","3","E"])).toBe('4,1,2,3');
  });

});
