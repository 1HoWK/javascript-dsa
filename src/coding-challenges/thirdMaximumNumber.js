/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max = null;
    let secondMax = null;
    let thirdMax = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max || nums[i] === secondMax || nums[i] === thirdMax) {
            continue;
        }
        if (max === null || nums[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        } else if (secondMax === null || nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if (thirdMax === null || nums[i] > thirdMax) {
            thirdMax = nums[i];
        }
    }
    // If the third maximum does not exist, return the maximum number.
    if (thirdMax === null) {
        return max;
    }
    return thirdMax;
};

// 1,2,2,5,3,5

// max = 1

// max 2,  second = 1

// max 2, second 1

// max 5, second 2 third 1

// max 5, second = 3, third = 2