class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // brute force 
        // appraoch - In order to check the characters:
        // 1 - we need to clean the str removing any special characters or spaces, remaining alphanumeric characters only.
        // 2 - no reverse the string 
        // 3 - compare both revered string and cleaned str, if they match return true, if not return false

        let cleanStr = "";

        // looping through string
        for (let ch of s) {
            // check if the ch is alphanumeric ch or not 
            if (/[A-Za-z0-9]/.test(ch)) {
                // if yes, then add it cleanStr
                cleanStr += ch.toLowerCase();
            }
        }
        // now reverse the string 
        let reversed = cleanStr.split("").reverse().join("");

        // now check if both are same or not if yes then return true
        if (reversed === cleanStr) return true;
        return false;

    }
}
