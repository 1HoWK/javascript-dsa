var isValid = function (s) {
  let charArray = s.split("");
  let stack = [];

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "(" || charArray[i] === "[" || charArray[i] === "{") {
      stack.push(charArray[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let pop = stack.pop();
      if (
        (charArray[i] === ")" && pop !== "(") ||
        (charArray[i] === "}" && pop !== "{") ||
        (charArray[i] === "]" && pop !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
