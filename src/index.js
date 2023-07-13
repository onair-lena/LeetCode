var findTheLongestBalancedSubstring = function (s = "111") {
  let res = 0;
  let subArr = 0;
  let k = 1;
  for (let i = 0; i < s.length; i++) {
    console.log(i, k, s[i - k], s[i]);
    if (s[i - k] === "0" && s[i] === "1") {
      subArr++;
      k += 2;
      if (subArr > res) {
        res = subArr;
      }
    } else {
      subArr = 0;
      k = 1;
    }
  }
  return res * 2;
};

console.log(findTheLongestBalancedSubstring());
