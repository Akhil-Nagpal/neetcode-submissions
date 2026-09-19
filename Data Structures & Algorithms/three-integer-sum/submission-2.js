class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute force 
        // approach - first to remove the duplicates we need to use hashset and calculate the distict numbers, if it meets target add them to set 
        // edge case - if array is empty
        if (nums.length === 0) return 0;

        let set = new Set();
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let triplet = [nums[i], nums[j], nums[k]];
                        // sort the triplets in ascending order
                        triplet.sort((a, b) => a - b);
                        // after sort add them to set
                        set.add(triplet.join(","));
                    }
                }
            }
        }
        // get each triplet and push it to result array 
        for (let item of set) {
            result.push(item.split(",").map((item) => Number(item)));
        }
        return result;
        
    }
}
