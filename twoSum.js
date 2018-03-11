function twoSum(arr, sum) {
    var pairs = [];
    var hashTable = [];
    for (var i = 0; i < arr.length; i++ ){
        if(hashTable.indexOf(sum - arr[i]) !== -1) pairs.push([arr[i],sum-arr[i]]);
        hashTable.push(arr[i]);
    }
    return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3],7));