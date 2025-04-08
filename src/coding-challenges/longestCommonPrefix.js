var longestCommonPrefix = function (strs) {
  // prefix - beginnning oof the word

  // empty case
  if (strs.length === 0) return "";

  // get the first string as prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // check each character
    // index of returns the position of the first occurren
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      // last digit always ignored
    }
  }

  return prefix;
  // O(n * m)
};
