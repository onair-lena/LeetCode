//1759. Count Number of Homogenous Substrings

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
      let res =0
  let start = 0;
  let end = 0;

  while (end < s.length + 1) {
    if (s[start] === s[end]) {
      end++;
    } else {
      const substr = s.slice(start, end);
      res = res+((1+substr.length)*substr.length)/2
      start = end;
    }
  }
 
  return res % 1000000007
};