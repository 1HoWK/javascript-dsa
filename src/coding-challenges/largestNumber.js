var largestNumber = function (nums) {
  const sortedNums = nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });

  const joined = sortedNums.join("");

  if (parseInt(joined) === 0) {
    return "0";
  } else {
    return joined;
  }
};
