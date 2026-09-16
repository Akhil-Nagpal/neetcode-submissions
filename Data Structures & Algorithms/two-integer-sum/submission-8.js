class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Optimised Solution using Hashmap
        // right now I have 
        let map = new Map();

        for (let i = 0; i < nums.length; i++){
           
            // now we have the target and and index so i can calcualte how much we need 
            let needed = target - nums[i];

            // check if the needed value is in the map, if yes then 
            if (map.has(needed)) {
                return [map.get(needed), i]
            }
            // if not, then store the value and its index in map 
            map.set(nums[i], i)
        }

        return [-1, -1]
    }
}
