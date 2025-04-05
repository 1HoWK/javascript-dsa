var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }

  // any number power 0 will get 1
  if (n === 1) {
    return true;
  }
  return n % 2 === 0 && isPowerOfTwo(n / 2);
};
