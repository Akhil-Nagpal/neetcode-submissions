class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // optimised code using two pointers
        // approach - unlike brute force here we use opposite pointers to track and check if the pointers have same character or not 
        // 1 - initiate pointers
        // 2 - loop ntill left is smaller then right 
        // 3 - check if the pointer is non alphanumeric character if yes make pointers move 
        // if it doesn't match return false 
        // after the loop if it doesn't return false then return true;

        let l = 0;
        let r = s.length - 1;

        // loop
        while (l < r) {
            // check 
            while (l < r && !/[a-zA-Z0-9]/.test(s[l])) l++;
            while (l < r && !/[a-zA-Z0-9]/.test(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }
}
