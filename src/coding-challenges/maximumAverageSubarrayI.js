/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length == 1) {
    return nums[0];
  }

  let currentSum = 0;
  let maxSum = -Infinity;
  let startingWindow = 0;

  for (let i = 0; i < nums.length; i++) {
    // add up all current window
    currentSum += nums[i];
    // check if we reach the end of valid window
    if (i - startingWindow === k - 1) {
      // after 1 window
      // compare and find maxsum
      maxSum = Math.max(currentSum, maxSum);
      // minus the first element of the starting window
      currentSum -= nums[startingWindow];
      // move forward
      startingWindow++;
    }
  }

  return maxSum / k;
};

// windows is 4 right
// add up all 4 and return the average
// find the highest average

// 1,12,-5,-6,50,3

// i need to move 1
// 1 window - i + upcoming number
//
