class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force 

        // make a new array 
        let result = [];

        // loop through the array 
        for (let i = 0; i < nums.length; i++) {
            // create a new variable to track the answer 
            let product = 1;
            
            for (let j = 0; j < nums.length; j++) {
                // check if both index match, if yes then continue
                if (i === j) continue;
                // if not then calculate product
                product *= nums[j];
            }
            // then push the product to result array 
            result.push(product)
        }
        return result;
    }
}
