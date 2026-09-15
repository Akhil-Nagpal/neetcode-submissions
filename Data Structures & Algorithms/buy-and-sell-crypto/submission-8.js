class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Optimised Solution
        let profit = 0;
        
        // trace the minimum price for buying 
        let min = prices[0];
        
        for (let i = 0; i < prices.length; i++) {
            // check if the current ith value is less than min
            min = Math.min(prices[i], min);

            // calculate the profit with min and current value 
            let currentProfit = prices[i] - min;

            // check if the current profit is higher then profit or not
            profit = Math.max(currentProfit, profit);
        }
        return profit
    }
}
