//231. Power of Two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  const subRes = (pow) => Math.pow(2, pow);

  let i = 0;

  while (subRes(i) !== n) {
    if (subRes(i) > n) {
      return false;
    }
    if (subRes(i) < n) {
      i++;
    }
  }
  return true;
};