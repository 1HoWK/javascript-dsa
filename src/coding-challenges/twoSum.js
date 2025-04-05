var twoSum = function (nums, target) {
  // Method 1 : nested for loops (brute force) O(n2)
  // Method 2 : using hashmap

  // Create a Map
  // keep track of what we have checked
  const map = new Map();

  // for loop to iterate each element
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    // check if it exists
    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    // add element
    map.set(nums[i], i);
  }

  return [];
};
