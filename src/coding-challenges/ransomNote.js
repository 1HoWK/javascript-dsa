var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let maga of magazine) {
    map.set(maga, (map.get(maga) || 0) + 1);
  }

  // a -> 2
  // b -> 1

  // aa
  for (let char of ransomNote) {
    if (!map.has(char) || map.get(char) <= 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
};
