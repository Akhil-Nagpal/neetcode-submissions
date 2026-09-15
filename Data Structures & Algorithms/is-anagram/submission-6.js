class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Optimised Solution using HashMap

        // first edge case - if length doesn't match return false
        if (s.length !== t.length) return false;

        // initialise map 
        let mapS = new Map();
        let mapT = new Map();

        // loop through string and count the frequency
        for (let i = 0; i < s.length; i++) {
            // add values to the map
            mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
            mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
        }

        // now check if both have same key and frequency
        for (let [key, value] of mapS) {
            // check if the key and value is same as mapT
            if (mapT.get(key) !== value) {
                return false
            }
        }

        return true;
    }
}
