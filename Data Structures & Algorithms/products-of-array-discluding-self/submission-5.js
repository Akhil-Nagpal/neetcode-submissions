class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // optimised code uisng prefix/suffix sum
        // 
        let left = [];

        // first calculate the left side of the ith value
        let productL = 1;

        for (let i = 0; i < nums.length; i++) {
            // first set the product in array 
            left[i] = productL;
            // calculate the product
            productL *= nums[i]
        }
        
        // now build the right
        let right = [];

        let productR = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = productR;
            productR *= nums[i]
        } 
        
        // now calculate the result by multiplying both arrays 
        let result = [];

        for (let i = 0; i < left.length; i++) {
            result.push(left[i] * right[i]);
        }
        return result
    }
}
