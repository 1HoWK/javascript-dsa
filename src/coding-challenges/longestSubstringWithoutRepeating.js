/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // use while because remove characters until we find b with left pointer.
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    // maxLength contains subarray of length previously
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
