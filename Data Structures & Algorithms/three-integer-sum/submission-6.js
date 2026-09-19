class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // optimised code using two pinters 
        // approach - 
        // inorder to work with this we need to sort the array first
        // 1 - I will fix the pointer using loop 
        // 2 - now check if the ith value is duplicate or not, 
        // 3 - if not, then run another loop to calculate the sum like two sum II
        // 4 - check if the left is duplicate then move left forward, smae goes for right but the other way 
        // 5 - check if the sum is smaller move left forward 
        // 6 - check if the sum is larger then move right backward 
        // 7 - if both are wrong then, it's calculated return the result

        let result = [];

        // sort the numbers but in 
        nums.sort((a, b) => a - b);

        // loop to make the first pointer fix 
        for (let i = 0; i < nums.length; i++) {
            // check if the ith value is duplicate or not, if yes continue;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // create the pointers 
            let l = i + 1; 
            let r = nums.length - 1;

            // loop untill l is smaller then r 
            while (l < r) {
                // calculate the sum 

                let sum = nums[i] + nums[l] + nums[r];

                // chec kif the sum is equal to 0, if yes then push it to result array 
                if (sum === 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    // after pushing move the pointers 
                    l++;
                    r--;

                    // check if the left pointer is duplicate 
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    // check same for right 
                    while (l < r && nums[r] === nums[r - 1]) r--;

                } else if (sum < 0) {
                    // check if the sum is smaller then move left pointer forward
                    l++

                } else {
                    r--;
                }
            }
        }
        return result;


    }
}
