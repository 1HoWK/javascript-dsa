var lengthOfLastWord = function (s) {
  s = s.trim();

  let stringArray = s.split(" ");

  return stringArray[stringArray.length - 1].length;
};
