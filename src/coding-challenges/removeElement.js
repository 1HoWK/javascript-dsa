var removeElement = function (nums, val) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
  // method 1: use a new array
  // method 2: two pointers O(n)
  // method 3: use built in function,  arr.filter(num => num !== 3)
};
