class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // optmised approach using two pointers
        let left = 0;
        let right = numbers.length - 1;

        // loop till left is smaller then right 
        while (left < right) {
            // check if the both pointers sum is equal to target or not 
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1]
            }
            // check if sum is smaller then move left forward 
            if (numbers[left] + numbers[right] < target ) left++;
            // if sum is larger then move right 
            if (numbers[left] + numbers[right] > target ) right--;
        }
        return [-1, -1];

    }    

}
