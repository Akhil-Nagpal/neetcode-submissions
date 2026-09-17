class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // brute force using hashmap not quite actual brute force but there is another way 

        let map = new Map();

        // traverse instill the end of the array 
        for (let i = 0; i < strs.length; i++) {
            // sort the string
            let sortedStr = strs[i].split("").sort().join();

            // check if the key exists in map or not, if not then add the key
            if (!map.has(sortedStr)) {
                map.set(sortedStr, [])
            }
            // if key exists, then get the value of that key and add new value
            map.get(sortedStr).push(strs[i]);
        }
        // return Array.from(map.values());
        return [...map.values()]
        
    }
}
