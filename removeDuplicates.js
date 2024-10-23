function removeDuplicates(nums){
    for(let i=1;i<nums.length;i++){
        for(let j=i-1;j>=0;j--){
            if(nums[j]!=="_"){
                if(nums[i]==nums[j]){
                    nums[j]="_"
                }
            }
        }
    }
    return nums.sort()
}

console.log(removeDuplicates([0,1,1,1,1,1,2,3,3,3,3]))