var containsNearbyDuplicate = function (nums, k) {
  // brute force O(n2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
  //       return true;
  //     }
  //   }
  // }

  // keep track of the indices of elements we’ve seen so far:
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(i - map.get(nums[i])) <= k) {
        return true;
      }
    }
    map.set(nums[i], i);
  }
  return false;
};
