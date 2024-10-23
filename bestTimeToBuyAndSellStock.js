var maxProfit = function(prices) {
    //Greedy Algorithm
    let profit=0
    let minPrice=prices[0]
    for(let i=0;i<prices.length;i++){
        minPrice=Math.min(minPrice,prices[i])
        currProfit=prices[i]-minPrice
        profit=Math.max(currProfit,profit)
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]));