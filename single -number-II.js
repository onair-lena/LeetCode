//137. Single Number II

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums = [0, 1, 0, 1, 0, 1, 99]) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return Object.keys(obj).sort((a, b) => obj[a] - obj[b])[0];
};