function rotateArray(arr,k){
    res=[]
    for(let i=0;i<arr.length;i++){
        let newIndex=(i+k)%(arr.length)
        res[newIndex]=arr[i]
    }
    return res
}

console.log(rotateArray([1,2,4,7,9,3],2))

/*

0-2
1-3
2-4
3-5
4-0
5-1

length=6

*/