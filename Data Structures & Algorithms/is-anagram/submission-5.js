class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // brute force 

        // checking if the length of both strings are same if not then its not an anagram
        if (s.length !== t.length) return false;

        
        // now we know strings are equal, the sort the string
        let sortedS = s.split("").sort().join("");
        let sortedT = t.split("").sort().join("");

        // check if both sorted strings have same characters with same frequency
        if (sortedS === sortedT) return true;
        return false;

    }
}
