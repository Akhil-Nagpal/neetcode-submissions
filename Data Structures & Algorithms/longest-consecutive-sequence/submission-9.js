class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // brute force with sorting

        // sort the array first in ascending order
        let sortedNums = nums.sort((a, b) => a - b);
        
        // count how many consecutive we seen
        let longest = 0;
        let count = 1;

        for (let i = 1; i < sortedNums.length; i++) {
            // check if the current value is equal then previous value
            if (sortedNums[i] === sortedNums[i - 1]) continue;

            // check if the current value is equal to previous value + 1
            if (sortedNums[i] === sortedNums[i - 1] + 1) {
                count++
            } else {
                // if the consecutive counting chain break then update the longest and set count to 0
                longest = Math.max(longest, count)
                count = 1;
           }
        }
         // also update the longest when the array hit the boundry
            longest = Math.max(longest, count);
            return longest;
       
    }
}
