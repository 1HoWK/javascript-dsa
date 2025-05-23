var isAnagram = function (s, t) {
  // based on th constraints
  if (s.length !== t.length) {
    return false;
  }

  // not case sensitive

  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char) || map.get(char) <= 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
};
